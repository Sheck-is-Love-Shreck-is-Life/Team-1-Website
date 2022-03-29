import express from 'express';

const port = 3000;

const app = express();

//app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/spencer', (req,res) => {res.send("Hello Spencer")});

app.get('/jade', (req,res) => {res.send("Hello Jade")});

app.get('/clayson', (req,res) => {res.send("Hello Clayson")});

app.get('/mikey', (req,res) => {res.send("Hello Mikey")});

app.get('/ernest', (req,res) => {res.send("Hello Ernest")});


app.listen(port, ()=>console.log("Listening"));