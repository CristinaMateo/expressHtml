const express = require('express')
const app = express()
const port = 3000
const path = require('path');

    //__dirname : It will resolve to your project folder.

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/index.html'));
});

app.get('/location',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/location.html'));
});

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/about.html'));
});

app.get('/mission',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/mission.html'));
});

app.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/contact.html'));
});


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})