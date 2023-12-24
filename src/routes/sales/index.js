const express = require('express');
const salesRouter = express.Router();

const { 
    get,
    getOneSale,
    // create,
    // modifySale,
    // deleteSale,
    getSaleByTicket
    // getSaleByRecord
} = require('../../controllers/sales/index.js');

salesRouter.get('/', get);
salesRouter.get('/:id', getOneSale);
salesRouter.get('/ticket/:id', getSaleByTicket);
// salesRouter.get('/record/:id', getSaleByRecord);
// salesRouter.post('/', create);
// salesRouter.patch('/:id', modifySale);
// salesRouter.delete('/:id', deleteSale);

module.exports = { salesRouter };