const awsServerlessExpress = require('aws-serverless-express');
const express = require('express');
const router = express.Router();
const app = require('./app');

const mongoose = require('mongoose');
const OPTS = { useNewUrlParser: true };

DB_URI = "mongodb+srv://sahmen:S0umyaji1@nodestack.vlfcv.mongodb.net/smart_tech_gigs";



mongoose.connect(DB_URI, OPTS, function(err, db) {
    if (err) { 
        return console.error('failed',err);
    }
});


const productsRouter = require('./products/productsRoutes.js');


router.use(productsRouter);


/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
