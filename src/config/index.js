require('dotenv').config();

const config = {
    env: process.env.NODE_ENV, 
    port: process.env.PORT,
    hostDB: process.env.DB_HOST,
    portDB: process.env.DB_PORT,
    nameDB: process.env.DB_NAME,
    userDB: process.env.DB_USER,
    passwordDB: process.env.DB_PASS
};

module.exports = { config };