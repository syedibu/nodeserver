const {UserQuery} = require('./graphql/query');
const {createUser,deleteUser,updateUser} = require('./graphql/mutaions');
const {GraphQLObjectType,GraphQLSchema} = require('graphql');
    
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user:UserQuery
    }
});
const RootMutaion = new GraphQLObjectType({
    name:"RootMutaionType",
    fields: {
        createUser,
        deleteUser,
        updateUser
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation:RootMutaion
});