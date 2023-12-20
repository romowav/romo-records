const express = require('express');
const app = express();
const port = 3000;

// METODOS / ENDPOINTS

app.get('/holi', (req, res) => {
    res.send('si esta jalando');
})

// SERVIDOR
app.listen(port, () => {
    console.log(`Servidor corriending desde el puerot ${port}`);
})