const express = require('express');
const routes = express.Router();
const { getRequest } = require('../controllers/crudControllers');


routes.get('/admin', getRequest);
routes.post('/admin', (req, res) => {
    res.status(200).json({ message: req.body.query})
})


module.exports = routes;
