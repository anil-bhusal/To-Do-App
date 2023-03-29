const { Router } = require('express');
const app = Router();
const toDoTasks = require('../models/toDoTasks')

app.post('/tasks', async (req, res) => {
    try {
        const data = await toDoTasks.create(req.body)
        if (data) {
            res.json({
                msg: "Task has been created"
            })
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err)
    }
})

app.get('/tasklist', async (req, res) => {
    try {
        const data = await toDoTasks.find()
        if (data) {
            res.json({
                taskList: data
            })
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err)
    }
})

app.put('/tasks', async (req, res) => {
    try {
        const data = await toDoTasks.findByIdAndUpdate(req.body._id, req.body)
        if (data) {
            res.json({
                msg: "updated successfully"
            })
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err)
    }
})


app.get('/task-completion-rate/:date', async (req, res) => {

    const tasks = await toDoTasks.find({ dueDate: req.params.date });
    const totatTaskOnParticularDate = tasks.length
    let totalCompletedTaskOnParticularDate = 0

    const checkCompletionRate  = tasks.map((item, id) => {
        if (item.taskCompletionRate == 100) {
            totalCompletedTaskOnParticularDate = totalCompletedTaskOnParticularDate + 1
        }
    });

    const compltionRate = (totalCompletedTaskOnParticularDate / totatTaskOnParticularDate) * 100
    
    console.log("check", compltionRate)
    
    res.json({
        taskCompletionRate: compltionRate
    });
});

module.exports = app