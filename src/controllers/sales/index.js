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
        res.status(200).json(oneSale);
    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir la sale'});
    }
}

const getSaleByTicket = async (req,res) => {
    try {
        const idTicket = req.params.id;
        const salesWithTicket = await salesObj.getSaleByTicket(idTicket);
        res.status(200).json(salesWithTicket);
    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir la sale con ese ticket'});
    }
}

const getSaleByRecord = async (req,res) => {
    try {
        const idRecord = req.params.id;
        const salesWithRecord = await salesObj.getSaleByRecord(idRecord);
        res.status(200).json(salesWithRecord);
    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir la sale con ese record'});
    }
}

const createSale = async (req,res) => {
    try {
        const newSale = req.body;
        await salesObj.createSale(newSale);
        res.status(201).json({message: 'nueva sale agregada exitosamente', newSale})
    }catch (error) {
        res.status(500).json({message: 'No puedo crear la sale'});
    }
}

const modifySale = async (req,res) => {
    try {
        const modSale = req.body;
        const modId = req.params.id;
        await salesObj.modifySale(modSale, modId);
        res.status(201).json({message: 'Sale modificada exitosamente', id: modId, data: modSale})  
    }catch (error) {
        res.status(500).json({message: 'No puedo modificar la sale'});
    }
}

const deleteSale = async (req,res) => {
    try {
        const delID = req.params.id;
        await salesObj.deleteSale(delID);
        res.status(200).json({message: 'Sale eliminada exitosamente', id: delID});
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