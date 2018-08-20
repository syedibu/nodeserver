const express = require('express');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const helper = require('./utils/helper');
const express_graphql = require('express-graphql');
const {ApolloServer,gql} = require('apollo-server-express');
const schema = require('./api');
dotenv.load();

var app = express();

app.use('/graphql',express_graphql({
    schema:schema,
    graphiql:true,
    formatError: error => ({
        message: error.message,
        locations: error.locations,
        stack: error.stack ? error.stack.split('\n') : [],
        path: error.path
    })
}));

const PORT = process.env.PORT;

app.listen(PORT,function(){
    console.log('app is listen in port ' + PORT);
});