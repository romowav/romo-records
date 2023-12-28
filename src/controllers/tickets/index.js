const { Tickets } = require('../../services/tickets/index.js');
const ticketsObj = new Tickets();

const get = async (req, res) => {
    try {
        const tickets = await ticketsObj.getTickets();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'conroller' });
    }
}

const getOne = async (req, res) => {
    try {
        const idLookUp = req.params.id
        const ticket = await ticketsObj.getOneTicket(idLookUp);
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({message: 'No puedo mostrar el ticket'})
    }
}

const create = async (req, res) => {
    try {
        const newTicket = req.body;
        await ticketsObj.createTickets(newTicket);
        res.status(201).json({message: 'Ticket creado', data: newTicket});
    } catch (error) {
        res.status(500).json({ message: 'No puedo crear el ticket' });
    }
}

const modifyTicket = async (req, res) => {
    try {
        const idTicket = req.params.id;
        const modTicket = req.body;
        await ticketsObj.modifyTickets(modTicket, idTicket);
        res.status(200).json({message: 'Ticket modificado', data: modTicket});
    }catch (error) {
        res.status(500).json({message: 'No puedo modificar el ticket'});
    }
}


module.exports = {
    get,
    getOne,
    create,
    modifyTicket
}