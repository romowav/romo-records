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
}

module.exports = { Sales };
