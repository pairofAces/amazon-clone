const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HtQxjLQ1A20Nf2b2rl3osRz5jg8gMJJvo9Gu0MbVLNcoggEXEodOANp3pcZhA6Bqll2cUtrpFSPHWjd3gcD2YBd00GBAu5NmO')

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World!'))

// Listen Command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/clone-d0660/us-central1/api