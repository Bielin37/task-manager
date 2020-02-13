require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndDelete('5e43a8bf6baa5f2718d96d29').then((task) => {
    console.log(task)
    return Task.countDocuments({completes: false})
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}) */

const deleteTaskAndCount = async (id) => {
    const deleteTask = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completes: false})
    return count
}

deleteTaskAndCount('5e43c127b9e7171464591de7').then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

