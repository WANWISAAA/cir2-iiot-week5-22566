const express = require('express');
const app = express();
const cors = require('cors')
const logger = require('morgan');
require('dotenv').config()
const port = process.env.PORT || 5000;

//Middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//get: http://localhost:5000/1
app.get('/', (req,res) => {
    console.log("Hello World!");
    console.log(req.query);
    console.log(req.perams);
    console.log(req.url);
    return res.status(200).json({
        message:'Mark',
        level:'admin',
        params: req.params,
    });
});
//get: http://localhost:5000/2
app.get('/:id', (req,res) => {
    console.log("Hello World!");
    console.log(req.query);
    console.log(req.perams);
    console.log(req.url);
    console.log(req.body);
    return res.status(200).json({
        message:'Mark',
        level:'admin',
        params: req.params,
    });
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});