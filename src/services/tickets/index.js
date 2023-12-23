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
            const queryString = `SELECT * FROM tickets WHERE id_ticket = ${idLookUp};`;
            const result = await connecDB.query(queryString)
            return result.rowCount == 0 ? error : result.rows;    
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
            const result = await connecDB.query(queryString, params);
            return result.rowCount == 0 ? error : true;
        }catch (error) {
            throw new Error('services error');
        }
    }

    async modifyTickets(modTicket, idLookUp) {
        const { successful, total } = modTicket;
        try {
            const queryString = `UPDATE tickets SET successful = $1, total = $2 WHERE id_ticket = ${idLookUp};`;
            const params = [successful, total]
            const result = await connecDB.query(queryString, params);
            return result.rowCount == 0 ? error : true;
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