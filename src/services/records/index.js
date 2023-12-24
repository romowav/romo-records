const connecDB = require('../../db/connection.js');
class Records {

    constructor() {
        this.records = []
    }

    async getRecords() {
        try{
            const queryString = `SELECT * FROM records ORDER BY id_record ASC;`;
            const result = await connecDB.query(queryString);
            return result.rows;
        }catch (error){
            throw new Error('services error');
        }
    }

    async getOneRecord(idLookUp) {
        try{
            const queryString = `SELECT * FROM records WHERE id_record = ${idLookUp};`;
            const result = await connecDB.query(queryString);
            return result.rowCount == 0 ? error : result.rows;
        }catch (error){
            throw new Error('services error');
        }
    }

    async createRecords(newRecord) {
        const { 
            band,
            record_title,
            release_year,
            sale_prize,
            purchase_prize,
            storage_quantity
        } = newRecord;

        try{
            const queryString = `
                INSERT INTO records (band, record_title, release_year, sale_prize, purchase_prize, storage_quantity)
                VALUES ($1, $2, $3, $4, $5, $6)
            `;
            const params = [band, record_title, release_year, sale_prize, purchase_prize, storage_quantity];
            const result = await connecDB.query(queryString, params);
            // console.log('result services ------------------',result);

            // Aqui hago la validacion de mi funcion, la cual va a regresar al controller un "error" o el "result" con el record creado.
            return result.rowCount == 0 ? error : result;
        }catch (error){
            throw new Error(error);
        }
    }

    async modifyRecord(modRecord, idLookUp) {
        const { 
            band,
            record_title,
            release_year,
            sale_prize,
            purchase_prize,
            storage_quantity
        } = modRecord;

        try{
            const queryString = `UPDATE records SET band = $1, record_title = $2, release_year = $3, sale_prize = $4, purchase_prize = $5, storage_quantity = $6 WHERE id_record = $7;`;
            const params = [band, record_title, release_year, sale_prize, purchase_prize, storage_quantity, idLookUp];
            // Aqui hago la validacion de mi funcion, la cual va a regresar al controller un "false" o "true" a mi controller.
            const result = await connecDB.query(queryString, params);
            return result.rowCount == 0 ? false : true;
        }catch (error){
            throw new Error(error);
        }
    }

    async deleteRecord(delRecord) {

        try{
            const queryString = `
                DELETE FROM records WHERE id_record = ${delRecord};
            `;
            const result = await connecDB.query(queryString);
            return result.rowCount == 0 ? error : true;
        }catch (error){
            throw new Error(error);
        } 
    }
}

module.exports = { Records }