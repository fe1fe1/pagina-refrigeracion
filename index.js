const express = require('express');
const path = require('path');


const app = express();

const PORT = 3000;




// archivos estaticos
app.use(express.static(__dirname + '/'));

// middlewares
app.use(express.urlencoded({extended: false}));



// enrutado provisorio
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','main.html'));
});
app.get('/main',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','main.html'));
});
app.get('/contacto',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','contacto.html'));
});
app.get('/contactoError',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','contactoError.html'));
});


// enrutado real
app.use(require('./routes/contacto'));
app.use(require('./routes/main'));

app.listen(PORT,() => console.log('Server is starting on PORT, ', 3000));
