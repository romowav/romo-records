const express = require('express');
const ticketsRouter = express.Router();

const {
    get,
    getOne,
    create,
    modifyTicket
} = require('../../controllers/tickets/index.js');

ticketsRouter.get('/', get);
ticketsRouter.get('/:id', getOne);
ticketsRouter.post('/', create);
ticketsRouter.patch('/:id', modifyTicket);


module.exports = { ticketsRouter };