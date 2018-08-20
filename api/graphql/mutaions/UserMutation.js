const { UserType, UserResult } = require('../type/UserType');
const db = require('../../../db/models/index');
// const userContext = require('../../../db/contexts/userContext');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const createUser = {
    type: UserResult,
    args: {
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        }
    },
    resolve: (_, { firstName, lastName, email }) => {
        var user = { firstName, lastName };
        var usermodel = db["User"];
        return {
            result: "User Created Successfully!",
            User: usermodel.create(user).then(u => u.dataValues)
        };
    }
}

var deleteUser = {
    type: UserResult,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (_, { id }) => {
        var user = await db["User"].findAll({ where: { id: id } });
        console.log(user.length);
        if (user.length > 0) {
            var deleted = db["User"].destroy({ where: { id: id } }).then(d => d);
            console.log(deleted);
            return {
                result: "User deleted successfully!",
                User: user
            };
        } else {
            return {
                result: "User not found!",
                User: null
            }
        }
    }
}
const updateUser = {
    type: UserResult,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        }
    },
    resolve: (_, { id, firstName, lastName, email }) => {

        var user = {
            firstName:firstName,
            lastName:lastName,
            email:email
        }
        
        var user = db["User"].findAll({ where: { id: id } });
    if (user.length > 0) {
        db["User"].destroy({ where: { id: id } }).then(d => d);
        if(userContext.updateUser(user)){
            return {
                result: "User updated successfully!",
                User: db["User"].findById(id).then(u=>u)
            }
        }else{
            return {
                result: "Something went wrong, User was not updated!",
                User: null
            }
        }
    }

        
    }
}
module.exports = {
    createUser,
    deleteUser,
    updateUser
}