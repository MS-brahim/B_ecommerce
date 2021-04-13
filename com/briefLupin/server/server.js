const express = require('express');
const server = express();
const cors = require('cors')
require('dotenv/config');
const db = require('./api/config/db');
const formData = require("express-form-data");
const os = require('os');

server.use(express.json());
const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
};
server.use(formData.format());
server.use(formData.union());
server.use(formData.stream());
server.use(formData.parse(options));



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
server.use('/api/cart', require('./api/routes/cart.router'));
server.use('/api/order', require('./api/routes/order.router'));
