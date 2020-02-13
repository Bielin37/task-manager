require('../src/db/mongoose')
const User = require('../src/models/user')

/* User.findByIdAndUpdate('5e42bd38df72180ea4ebbff2', {age: 2}).then((user) => {
    console.log(user)
    return User.countDocuments({age : 2})
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}) */

const UpdateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

UpdateAgeAndCount('5e42bd38df72180ea4ebbff2', 4).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})