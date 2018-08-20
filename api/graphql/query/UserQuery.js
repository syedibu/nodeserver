var {UserType} = require('../type/UserType');
var db = require('../../../db/models/index');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

module.exports = {
    type: new GraphQLList(UserType),
    args: {
        id: {
            type: GraphQLInt,
        },
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        createdAt: {
            type: GraphQLString,
        },
        updatedAt: {
            type: GraphQLString,
        },
    },
    resolve: (user, args) => {return db["User"].findAll({where:args.id}).then(Users=>Users)},
};

// module.exports = {
//     UserQuery
// }