import jsonwebtoken from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

import clientsModel from '../models/Clients.js'
import { config } from '../config.js'

const registerClientsContoller = {}

registerClientsContoller.register = async (req, res) => {

    const {
        name,
        lastName,
        birthday,
        email,
        password,
        telephone,
        dui,
        isVerified} = req.body


    try {
        
        const existsClient = await clientsModel.findOne({email})

        if(existsClient){
            res.json({message: 'Client already exists'})
        }
        
        const passHash = await bcryptjs.hash(password, 10)

        const newClient = new clientsModel({name, lastName, birthday, email, password: passHash, telephone,dui: dui || null , isVerified: isVerified || false}) 
        await newClient.save()

        const verificationCode = crypto.randomBytes(3).toString('hex')
        const token = jsonwebtoken.sign(
            {email, verificationCode},
            config.JWT.secret,
            {expiresIn: "2h"}
        )

        res.cookie("VerificationToken", token, {maxAge: 2*60*60*1000})

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.emailsender.email_user, 
                pass: config.emailsender.pass_user
            }
        })

        const mailOptions = {
            from: config.emailsender.email_user,
            to: email,
            subject: "Verificacion de correo",
            text: `para verificar tu correo, utiliza el siguiente codigo ${verificationCode}\n el codigo vence en dos horas`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) return res.json({message: "Error" + error})

            console.log("Correo enviado " + info.response)
        })

        res.json({message: 'Client registered. Please verify your email whit the code sent'})
    } catch (error) {
        res.json({message: 'Error' + error})
    }
}

registerClientsContoller.verifycodeemail = async (req, res)=> {
    const { verificationCode } = req.body

    const token = req.cookies.VerificationToken

    try {
        const decoded = jsonwebtoken.verify(token, config.JWT.secret)
        const {email, verificationCode: storedCode} = decoded

        if(verificationCode !== storedCode){
            return res.json({message: "Invalid code"})
        }

        res.clearCookie("VerificationToken");
    } catch (error) {
        res.json({message: 'Error' + error})

    }
}

export default registerClientsContoller