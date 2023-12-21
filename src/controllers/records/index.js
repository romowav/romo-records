const { Records } = require('../../services/records/index.js');
const recordsObj = new Records();

const get = async (req, res) => {
    try {
        // aqui agarro los query params que vienen en la URL ".com/prodcut?limit=4&page=1"
        // const limit = req.query.limit
        // const page = req.query.page
        const records = await recordsObj.getRecords();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'con' });
    }
}

const getOne = async (req, res) => {
    try {
        const idLookUp = req.params.id;
        const record = await recordsObj.getOneRecord(idLookUp);
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const create = async (req, res) => {
    try {
        const newRecord = req.body;
        const registerWorked = await recordsObj.createRecords(newRecord);
        const messageIs = registerWorked === true ? 'success create' : 'fail create';
        res.status(201).json({message: messageIs, data: newRecord});
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const editRecord = async (req, res) => {
    try {
        // guardo el id que va a venir en la URL, para saber que record tengo que modificar en la DB
        const idModify = req.params.id;
        const modRecord = req.body;
        const modifyWorked = await recordsObj.modifyRecord(modRecord, idModify);
        const modMessage = modifyWorked === true ? 'success modify' : 'fail modify';
        res.status(202).json({message: modMessage, id: idModify, data: modRecord});
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const deleteRecord = async (req, res) => {
    try {
        const idDelete = req.params.id;
        const deleteRecord = await recordsObj.deleteRecord(idDelete)
        const deleteWorked = deleteRecord === true ? 'success delete' : 'fail delete';
        res.status(202).json({message: deleteWorked, idDelete});
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    get,
    getOne,
    create,
    editRecord,
    deleteRecord
}