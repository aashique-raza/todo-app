import Task from "../models/todo.model.js"

const showHomePage=async(req,res)=>{
    const data=await Task.find()
    // console.log(data)
    res.render('index',{taskData:data})
}

const addTask=async(req,res)=>{
    try {
        const task=req.body.task;
        // console.log(task)
        const data=new Task({
            task:task
        })
        const result=await data.save()
        res.redirect('/')
        
    } catch (error) {
        console.log(error)
    }
}

const taskDelete=async(req,res)=>{
    const id=req.params.ID;
    const result=await Task.findByIdAndDelete(id)
    res.redirect('/')
}

const edittask=async(req,res)=>{
    const id=req.params.ID;
    const data=await Task.findById(id)
    res.render('edit',{editData:data})
}

const editTaskWithData=async(req,res)=>{
    const task=req.body.task;
    const id=req.params.ID;
    const result=await Task.findByIdAndUpdate(id,{task:task},{timestamps:true});
    res.redirect('/')
}

export {showHomePage,addTask,taskDelete,edittask,editTaskWithData}