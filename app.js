let express = require('express');
let path = require('path');
let app= express();
app.use(express.static('public'));

app.listen(3030,()=> console.log('intentando no morir'));

//Comenzamos la odisea por las diferentes rutas
app.get('/', (req ,res)=> {
    let htmlPath=path.resolve(__dirname,'./views/index.html');
    res.sendFile(htmlPath)
});
app.get('/babbage', (req ,res)=> {
    let htmlPath=path.resolve(__dirname,'./views/babbage.html');
    res.sendFile(htmlPath)
});
app.get('/berners-lee', (req ,res)=> {
    let htmlPath=path.resolve(__dirname,'./views/berners-lee.html');
    res.sendFile(htmlPath)
});
app.get('/clarke', (req ,res)=> {
    let htmlPath=path.resolve(__dirname,'./views/clarke.html');
    res.sendFile(htmlPath)
});
app.get('/hamilton', (req ,res)=> {
    let htmlPath=path.resolve(__dirname,'./views/hamilton.html');
    res.sendFile(htmlPath)
});
app.get('/hopper', (req ,res)=> {
    let htmlPath=path.resolve(__dirname,'./views/hopper.html');
    res.sendFile(htmlPath)
});
app.get('/lovelace', (req ,res)=> {
    let htmlPath=path.resolve(__dirname,'./views/lovelace.html');
    res.sendFile(htmlPath)
});
app.get('/turing', (req ,res)=> {
    let htmlPath=path.resolve(__dirname,'./views/turing.html');
    res.sendFile(htmlPath)
});

