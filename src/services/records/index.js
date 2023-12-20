const connecDB = 'necesito crear archivo de conneccion con DB'
class Records {

    constructor() {
        this.records = []
    }

    async getRecords(){
        try{
            const queryString = ``;
            const result = await connecDB.query(queryString);
            return result.rows;
        }catch (error){
            throw new Error(error);
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
        // NECESITO ARMAR MI OBJETO DEL CONTROLLER PARA DESTRUCTURARLO ACA Y ACOMODAR LOS DATOS
        const { } = delRecord;

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

modules.exports = { Records }