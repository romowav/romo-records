const connDB = require('../../db/connection.js');

class Sales {
    constructor() {
        this.sale = [];
    }

    async getSales() {
        try {
            const queryString = `SELECT * FROM sales;`;
            const result = await connDB.query(queryString);
            return result.rowCount == 0 ? 'No puedo regresar sales' : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }

    async getOneSale(idLookUp) {
        try {
            const queryString = `SELECT * FROM sales WHERE id_sale = ${idLookUp}`;
            const result = await connDB.query(queryString);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }

    async getSaleByTicket(idLookUp) {
        try {
            const queryString = `SELECT * FROM sales WHERE id_ticket = ${idLookUp}`;
            const result = await connDB.query(queryString);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }

    async getSaleByRecord(idLookUp) {
        try {
            const queryString = `SELECT * FROM sales WHERE id_record = ${idLookUp}`;
            const result = await connDB.query(queryString);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }
}

module.exports = { Sales };
