const connecDB = require('../../db/connection.js');

class Tickets {
    constructor() {
        this.tickets = []
    }

    async getTickets() {
        try {
            const queryString = `SELECT * FROM tickets;`;
            const result = await connecDB.query(queryString);
            return result.rows;
        }catch (error) {
            throw new Error('services error');
        }
    }

    async getOneTicket(idLookUp) {
        try {

        }catch (error) {
            throw new Error('services error');
        }
    }

    async createTickets(newTicket) {
        const { 
            successful,
            total
        } = newTicket;

        try {
            const queryString = `INSERT INTO tickets (successful, total) VALUES ($1, $2);`;
            const params = [successful, total];
            const result = connecDB.query(queryString, params);
            return true;
        }catch (error) {
            throw new Error('services error');
        }
    }

    async modifyTickets(modTicket, idLookUp) {
        try {

        }catch (error) {
            throw new Error('services error');
        }
    }

    async deleteTickets(delTicket) {
        try {

        }catch (error) {
            throw new Error('services error');
        }
    }
}

module.exports = { Tickets }