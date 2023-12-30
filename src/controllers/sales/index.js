const { Sales } = require('../../services/sales/index.js');
const salesObj = new Sales();

const get = async (req,res) => {
    try {
        const sales = await salesObj.getSales();
        res.status(200).json(sales);
    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir las sale'});
    }
}

const getOneSale = async (req,res) => {
    try {
        const idSale = req.params.id;
        const oneSale = await salesObj.getOneSale(idSale);
        if (oneSale.rowCount == 0) {
            res.status(404).json({message: 'No encontre la sale'});
        }else {
            res.status(200).json(oneSale.rows);
        }
    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir la sale'});
    }
}

const getSaleByTicket = async (req,res) => {
    try {
        const idTicket = req.params.id;
        const salesWithTicket = await salesObj.getSaleByTicket(idTicket);
        if (salesWithTicket.rowCount == 0) {
            res.status(404).json({message: 'No encontre las sales con ese ticket'});
        }else {
            res.status(200).json(salesWithTicket.rows);
        }
    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir la sale con ese ticket'});
    }
}

const getSaleByRecord = async (req,res) => {
    try {
        const idRecord = req.params.id;
        const salesWithRecord = await salesObj.getSaleByRecord(idRecord);
        if (salesWithRecord.rowCount == 0) {
            res.status(404).json({message: 'No encontre los sales con ese record'});
        }else { 
            res.status(200).json(salesWithRecord.rows);
        }
    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir la sale con ese record'});
    }
}

const createSale = async (req,res) => {
    try {
        const newSale = req.body;
        const result = await salesObj.createSale(newSale);
        if (result.rowCount == 0) {
            res.status(403).json({message: 'No pude agregar el record'});
        } else {
            res.status(201).json({message: 'Nuevo record agregado', data: newSale.rows});
        }
        res.status(201).json({message: 'nueva sale agregada exitosamente', newSale})
    }catch (error) {
        res.status(500).json({message: 'No puedo crear la sale'});
    }
}

const modifySale = async (req,res) => {
    try {
        const modSale = req.body;
        const modId = req.params.id;
        const result = await salesObj.modifySale(modSale, modId);
        if (result.rowCount == 0){
            res.status(404).json({message: 'No encontre lsa Sale', id: modId});
        } else {
            res.status(201).json({message: 'Sale modificada exitosamente', id: modId, data: modSale})  
        }
    }catch (error) {
        res.status(500).json({message: 'No puedo modificar la sale'});
    }
}

const deleteSale = async (req,res) => {
    try {
        const delID = req.params.id;
        const result = await salesObj.deleteSale(delID);
        if (result.rowCount == 0){
            res.status(404).json({message: 'No encontre la Sale', delID});
        }else {
            res.status(200).json({message: 'Sale eliminada exitosamente', id: delID});
        }
    }catch (error) {
        res.status(500).json({message: 'No puedo borrar la sale'});
    }
}

module.exports = {
    get,
    getOneSale,
    getSaleByTicket,
    getSaleByRecord,
    createSale,
    modifySale,
    deleteSale
};