import dotevn from "dotenv"

dotevn.config()

export const config = {
    db: {
        URI: process.env.DB_URI
    }, 
    server: {
        port: process.env.PORT
    }
}