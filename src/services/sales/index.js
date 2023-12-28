const connDB = require('../../db/connection.js');

class Sales {
    constructor() {
        this.sale = [];
    }

    async getSales() {
        try {
            const queryString = `SELECT * FROM sales ORDER BY id_sale ASC;`;
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
            const queryString = `SELECT * FROM sales WHERE id_ticket = ${idLookUp} ORDER BY id_sale ASC;`;
            const result = await connDB.query(queryString);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }

    async getSaleByRecord(idLookUp) {
        try {
            const queryString = `SELECT * FROM sales WHERE id_record = ${idLookUp} ORDER BY id_sale ASC;`;
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
            const querySet = `SELECT SETVAL('id_para_sales', COALESCE((SELECT MAX(id_sale) FROM sales), 0) + 0 );`
            await connDB.query(querySet);
            const queryString = `
                INSERT INTO sales (id_Sale, id_record, id_ticket, piece_quantity) VALUES (NEXTVAL('id_para_sales'), $1, $2, $3);
            `;
            const params = [id_record, id_ticket, piece_quantity];
            const result = await connDB.query(queryString, params);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }

    async modifySale(modSale, idLookUp) {
        const { 
            id_record,
            id_ticket,
            piece_quantity
        } = modSale;
        try {
            const queryString = `UPDATE sales SET id_record = $1, id_ticket = $2, piece_quantity = $3 WHERE id_sale = $4;`;
            const params = [id_record, id_ticket, piece_quantity, idLookUp];
            const result = await connDB.query(queryString, params);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }

    async deleteSale (idLookUp) {
        try {
            const queryString = `DELETE * FROM sales WHERE id_sale = ${idLookUp}`;
            const result = await connDB.query(queryString);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error) {
            throw new Error (error);
        }
    }
}

module.exports = { Sales };
