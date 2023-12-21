const connecDB = require('../../db/connection.js');
class Records {

    constructor() {
        this.records = []
    }

    async getRecords() {
        try{
            const queryString = `SELECT * FROM records;`;
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
            return result.rows;
        }catch (error){
            throw new Error('services error');
        }
    }

    async createRecords(newRecord) {
        // NECESITO ARMAR MI OBJETO DEL CONTROLLER PARA DESTRUCTURARLO ACA Y ACOMODAR LOS DATOS
        const { } = newRecord;
        try{
            const queryString = `INSERT INTO`;
            const params = 'aqui van a etsar los datos destructurados de newRecord';
            const result = await connecDB.query(queryString, params);
            return true;
        }catch (error){
            throw new Error(error);
        }
    }

    async modifyRecord(modRecord) {
        // NECESITO ARMAR MI OBJETO DEL CONTROLLER PARA DESTRUCTURARLO ACA Y ACOMODAR LOS DATOS
        const { } = modRecord;

        try{
            const queryString = `UPDATE`;
            const params = 'aqui van a etsar los datos destructurados de modRecord';
            const result = await connecDB.query(queryString, params);
            return true;
        }catch (error){
            throw new Error(error);
        }
    }

    async deleteRecord(delRecord) {

        try{
            const queryString = `DELETE`;
            const params = 'aqui van a etsar los datos destructurados de delRecord';
            const result = await connecDB.query(queryString, params);
            return true;
        }catch (error){
            throw new Error(error);
        }
    }
}

module.exports = { Records }