const express = require('express');
const { corn } = require('./helper/scheduller');
const router = require('./router');
const app = express();

corn

app.use('/public/', router)

const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
    console.log('Server running in port'+port)
})