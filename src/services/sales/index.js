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

    async createSale(newSale) {
        const { 
            id_record,
            id_ticket,
            piece_quantity 
        } = newSale;
        try {
            const queryString = `
                INSERT INTO sales (id_record, id_ticket, piece_quantity) VALUES ($1, $2, $3);
            `;
            const params = [id_record, id_ticket, piece_quantity];
            const result = await connDB.query(queryString, params);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }
}

module.exports = { Sales };
