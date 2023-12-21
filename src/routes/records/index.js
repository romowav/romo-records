const express = require('express');
const recordsRouter = express.Router();

const { 
    get,
    getOne,
    create,
    editRecord,
    deleteRecord
} = require('../../controllers/records/index')

recordsRouter.get('/', get);
recordsRouter.get('/:id', getOne);
recordsRouter.post('/', create);
recordsRouter.patch('/:id', editRecord);
recordsRouter.delete('/:id', deleteRecord);

module.exports = { recordsRouter };