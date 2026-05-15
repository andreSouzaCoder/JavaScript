const express = require('express');
const app = express();

app.get('/produtos',function(req,res){
    res.send('<h1>Produtos</h1>')
})

app.listen(3333, function(){
    console.log('Servidor iniciado');
})