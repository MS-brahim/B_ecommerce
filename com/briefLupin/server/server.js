const express = require('express');
const server = express();
server.use(express.json());
require('dotenv/config')
const db = require('./api/config/db')

db.connect()
    .then(()=>{
        console.log("Connected to mongoDB success");
        server.listen(process.env.PORT, () => {
            console.log('run server port:' + process.env.PORT);
        })
    })

server.use('/api', require('./api/routes/admin.router'))