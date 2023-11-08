import express from 'express'
import { showHomePage,addTask,taskDelete,edittask,editTaskWithData } from '../controllers/todo.controller.js'

const router=express.Router()


router.get('/',showHomePage);
router.post('/',addTask)
router.get('/delete/:ID',taskDelete)
router.get('/edit/:ID',edittask)
router.post('/edit/:ID',editTaskWithData)


export default router