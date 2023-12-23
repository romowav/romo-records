const { Sales } = require('../../services/sales/index.js');
const salesObj = new Sales();

const get = async (req,res) => {
    try {
        await salesObj.getSales();
        res.status(200).json();
    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir las sale'});
    }
}

const getOne = async (req,res) => {
    try {

    }catch (error) {
        res.status(500).json({message: 'No puedo conseguir la sale'});
    }
}

const create = async (req,res) => {
    try {

    }catch (error) {
        res.status(500).json({message: 'No puedo crear la sale'});
    }
}

const modifySale = async (req,res) => {
    try {

    }catch (error) {
        res.status(500).json({message: 'No puedo modificar la sale'});
    }
}

const deleteSale = async (req,res) => {
    try {

    }catch (error) {
        res.status(500).json({message: 'No puedo borrar la sale'});
    }
}

module.exports = {
    get,
    getOne,
    create,
    modifySale,
    deleteSale
};