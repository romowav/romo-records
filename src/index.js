const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('./config/index')
const port = config.port;


// Con esto mi API ya puede consumir archivos de tipo .json
app.use(express.json());

// Esto nos ayuda para poner filtros de quien puede acceder a la API, revisar clase del 12/14/2023 Backend 1
app.use(cors());

// SERVIDOR
app.listen(port, () => {
    console.log(`Servidor corriending desde el puerot ${port}`);
})