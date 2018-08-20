var db = require('../models/index');

var userContext = {};

userContext.updateUser = async function(User)
{
    db["User"].update(
        { firstName: firstName, lastName: lastName, email: email },
        { where: { id: id } }).then(updated=>{
            return true;
        }).catch(error=>{
            return false;
        })
}

userContext.createUser = async function(User)
{
    return db["User"].create(user).then(u => u.dataValues);
}

userContext.deleteUser = async function(id){
    var user = await db["User"].findAll({ where: { id: id } });
    if (user.length > 0) {
        db["User"].destroy({ where: { id: id } }).then(d =>{
            return true;
        });
    }
    return false;
}


module.exports = {
    userContext
}