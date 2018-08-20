const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLID
} = require('graphql');

var UserType =  new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
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
    }),
});
const UserResult = new GraphQLObjectType({
    name: "UserResult",
    fields: ()=>
    ({
        result:
        {
            type:GraphQLString
        },
        User:
        {
            type: UserType
        }
    })
});
module.exports = {
    UserType,
    UserResult
}
