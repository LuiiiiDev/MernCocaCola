import express from 'express'

const router = express.Router()

import logOutControllers from '../controllers/logOutcrontollers.js'

router.route('/')
.post(logOutControllers.logout)

export default router