import express, { NextFunction } from 'express'
var router = express.Router()

import Controller from '../controllers/controller'
const controller = new Controller()



router.get("/", controller.root)



export default router