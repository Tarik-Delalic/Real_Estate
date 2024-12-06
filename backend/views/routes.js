const express = require('express');
const routes = express.Router();
const { getRequest } = require('../controllers/crudControllers');


routes.get('/admin', getRequest);


module.exports = routes;
