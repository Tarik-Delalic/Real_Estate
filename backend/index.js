const express = require('express');
const cors = require('cors');
const PORT = 8080;
const app = express();
const routes = require('./views/routes');
app.use(cors());
app.use(express.json());


app.use('', routes);



app.listen(PORT, console.log(`The server is running on PORT:${PORT}`));