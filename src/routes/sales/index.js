const express = require('express');
const salesRouter = express.Router();

const { 
    get,
    getOne,
    create,
    modifySale,
    deleteSale
} = require('../../controllers/sales/index.js');

salesRouter.get('/', get);
salesRouter.get('/:id', getOne);
salesRouter.post('/', create);
salesRouter.patch('/:id', modifySale);
salesRouter.delete('/:id', deleteSale);

module.exports = { salesRouter };