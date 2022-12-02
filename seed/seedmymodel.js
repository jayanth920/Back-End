const Todo = require('../models/mymodel')
const mymodelData = require('../json/mymodelData.json')



Todo.deleteMany({}).then(() => {
    Todo.create(mymodelDataFinal).then(task => {
        console.log(task)
        process.exit()
    })
})