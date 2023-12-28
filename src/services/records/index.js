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
            throw new Error(error);
        }
    }

    async getOneRecord(idLookUp) {
        try{
            const queryString = `SELECT * FROM records WHERE id_record = ${idLookUp};`;
            const result = await connecDB.query(queryString);
            return result;
        }catch (error){
            throw new Error(error);
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
            const querySet = `SELECT SETVAL('id_para_records', COALESCE((SELECT MAX(id_record) FROM records), 0) + 0 );`
            await connecDB.query(querySet);
            const queryString = `
                    INSERT INTO records (id_record, band, record_title, release_year, sale_prize, purchase_prize, storage_quantity) 
                    VALUES (NEXTVAL('id_para_records'), $1, $2, $3, $4, $5, $6);
                `;
            const params = [band, record_title, release_year, sale_prize, purchase_prize, storage_quantity];
            const result = await connecDB.query(queryString, params);
            return result;
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
            const result = await connecDB.query(queryString, params);
            return result;
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
            return result;
        }catch (error){
            throw new Error(error);
        } 
    }
}

module.exports = { Records }