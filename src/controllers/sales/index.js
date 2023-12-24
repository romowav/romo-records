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

// const getSaleByTicket = async (req,res) => {
//     try {

//     }catch (error) {
//         res.status(500).json({message: 'No puedo conseguir la sale con ese ticket'});
//     }
// }

// const getSaleByRecord = async (req,res) => {
//     try {

//     }catch (error) {
//         res.status(500).json({message: 'No puedo conseguir la sale con ese record'});
//     }
// }

// const create = async (req,res) => {
//     try {

//     }catch (error) {
//         res.status(500).json({message: 'No puedo crear la sale'});
//     }
// }

// const modifySale = async (req,res) => {
//     try {

//     }catch (error) {
//         res.status(500).json({message: 'No puedo modificar la sale'});
//     }
// }

// const deleteSale = async (req,res) => {
//     try {

//     }catch (error) {
//         res.status(500).json({message: 'No puedo borrar la sale'});
//     }
// }

module.exports = {
    get,
    getOneSale,
    // getSaleByTicket,
    // getSaleByRecord,
    // create,
    // modifySale,
    // deleteSale
};