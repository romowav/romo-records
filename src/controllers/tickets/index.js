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

const create = async (req, res) => {
    try {
        const newTicket = req.body;
        const creationTicket = await ticketsObj.createTickets(newTicket);
        const creationWorked = creationTicket === true ? 'success' : 'fail';
        res.status(200).json({message: creationWorked});

    } catch (error) {
        res.status(500).json({ message: 'conroller' });
    }
}



module.exports = {
    get,
    create
}