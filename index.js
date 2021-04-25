const express = require('express');
const path = require('path');


const app = express();

const PORT = 3000;




// archivos estaticos
app.use(express.static(__dirname + '/'));

// middlewares
app.use(express.urlencoded({extended: false}));

// enrutado 
app.use(require('./routes/contacto'));
app.use(require('./routes/main'));

app.listen(PORT,() => console.log('Server is starting on PORT, ', 3000));
