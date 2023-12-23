const express = require('express');
const { recordsRouter } = require('./records/index.js');
const { ticketsRouter } = require('./tickets/index.js');
const { salesRouter } = require('./sales/index.js');
const router = express.Router();

const routerApi = (app) => {
    app.use('/api/v0', router);
    router.use('/records', recordsRouter);
    router.use('/tickets', ticketsRouter);
    router.use('/sales', salesRouter);
}

module.exports = { routerApi };