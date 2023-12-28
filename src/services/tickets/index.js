const connecDB = require('../../db/connection.js');

class Tickets {
    constructor() {
        this.tickets = []
    }

    async getTickets() {
        try {
            const queryString = `SELECT * FROM tickets ORDER BY id_ticket ASC;`;
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
            const querySet = `SELECT SETVAL('id_para_tickets', COALESCE((SELECT MAX(id_ticket) FROM tickets), 0) + 0 );`;
            await connecDB.query(querySet);
            const queryString = `INSERT INTO tickets (id_ticket, successful, total) VALUES (NEXTVAL('id_para_tickets'), $1, $2);`;
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