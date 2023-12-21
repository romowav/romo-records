const express = require('express');
const ticketsRouter = express.Router();

const {
    get,
    create
} = require('../../controllers/tickets/index.js');

ticketsRouter.get('/', get);
ticketsRouter.post('/', create);


module.exports = { ticketsRouter };