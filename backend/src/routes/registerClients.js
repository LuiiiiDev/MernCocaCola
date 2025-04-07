import express from 'express'
import registerClientsContoller from '../controllers/registerClientsController.js'

const router = express.Router()

router.route('/')
    .post(registerClientsContoller.register)

router.route('/verifyCodeEmail')
    .post(registerClientsContoller.verifycodeemail)

export default router