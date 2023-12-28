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
        if (record.rowCount == 0) {
            res.status(404).json({message: 'No existe el record'})
        }else {
            res.status(200).json(record.rows);
        }
    } catch (error) {
        res.status(500).json({ message: 'No existe el servidor' });
    }
}

const create = async (req, res) => {
    try {
        const newRecord = req.body;
        const result = await recordsObj.createRecords(newRecord);
        if (result.rowCount == 0) {
            res.status(403).json({message: 'No pude agregar el record'});
        } else {
            res.status(201).json({message: 'Nuevo record agregado', data: newRecord});
        }
    } catch (error) {
        res.status(500).json({ message: 'No se pudo agregar el record' });
    }
}

const editRecord = async (req, res) => {
    try {
        // guardo el id que va a venir en la URL, para saber que record tengo que modificar en la DB
        const idModify = req.params.id;
        const modRecord = req.body;
        //  Guardo el resultado de mi consulta a la DB para validarda
        const result = await recordsObj.modifyRecord(modRecord, idModify);
        // Valido mi consulta para saber que mensaje de HTTP devolver
        if (result.rowCount == 0){
            res.status(404).json({message: 'No encontre el Record', id: idModify});
        } else {
            res.status(202).json({message: 'Record modificado exitosamente', id: idModify, data: modRecord});
        }
    } catch (error) {
        res.status(500).json({ message: 'No puedo modificar el record' });
    }
}

const deleteRecord = async (req, res) => {
    try {
        const idDelete = req.params.id;
        const result = await recordsObj.deleteRecord(idDelete);
        if (result.rowCount == 0){
            res.status(404).json({message: 'No encontre el record', idDelete});
        }else {
            res.status(202).json({message: 'Record eliminado exitosamente', idDelete});
        }
    } catch (error) {
        res.status(500).json({ message: 'No puedo eliminar el Record' });
    }
}

module.exports = {
    get,
    getOne,
    create,
    editRecord,
    deleteRecord
}