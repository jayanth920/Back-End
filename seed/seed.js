const Todo = require('../models/mymodel')
const mymodelData = require('../json/mymodelData.json')
const mymodelDataFinal = mymodelData.map(task => {
    return {
      task: task.task
    };
})


Todo.deleteMany({}).then(() => {
    Todo.create(mymodelDataFinal).then(task => {
        console.log(task)
        process.exit()
    })
})