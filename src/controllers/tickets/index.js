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
        if (ticket.rowCount == 0) {
            res.status(404).json({message: 'No encontre el ticket'});
        } else {
            res.status(200).json(ticket);
        }
    } catch (error) {
        res.status(500).json({message: 'No puedo mostrar el ticket'})
    }
}

const create = async (req, res) => {
    try {
        const newTicket = req.body;
        const result = await ticketsObj.createTickets(newTicket);
        if (result.rowCount == 0) {
            res.status(403).json({message: 'No pude crear el ticket'});
        } else {
            res.status(201).json({message: 'Ticket creado', data: newTicket});
        }
    } catch (error) {
        res.status(500).json({ message: 'No puedo crear el ticket' });
    }
}

const modifyTicket = async (req, res) => {
    try {
        const idTicket = req.params.id;
        const modTicket = req.body;
        const result = await ticketsObj.modifyTickets(modTicket, idTicket);
        if (result.rowCount == 0){
            res.status(404).json({message: 'No encontre el ticket', id: idTicket});
        }else {
            res.status(202).json({message: 'Ticket modificado', data: modTicket});
        }
    }catch (error) {
        res.status(500).json({message: 'No puedo modificar el ticket'});
    }
}

const deleteTicket = async (req, res) => {
    try {
        const idDelete = req.params.id;
        const result = await ticketsObj.deleteTickets(idDelete);
        if (result.rowCount == 0) {
            res.status(404).json({message: 'No encontre el ticket', id: idDelete});
        } else {
            res.status(200).json({message: 'Ticket borrado exitosamente'});
        }
    }catch (error){
        res.status(500).json({message: 'No pude borrar el ticket'});
    }
}

module.exports = {
    get,
    getOne,
    create,
    modifyTicket,
    deleteTicket
}