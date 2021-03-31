const express = require('express');
const server = express();
const cors = require('cors')
require('dotenv/config');
const db = require('./api/config/db');

server.use(express.json());
server.use(cors())
db.connect()
    .then(()=>{
        console.log("Connected to mongoDB success");
        server.listen(process.env.PORT, () => {
            console.log('run server port:' + process.env.PORT);
        });
    });


server.use('/api/user', require('./api/routes/user.router'));
server.use('/api/category', require('./api/routes/category.router'));
server.use('/api/product', require('./api/routes/product.router'));
server.use('/api/card', require('./api/routes/card.router'));