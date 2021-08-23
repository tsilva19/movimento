const express = require('express');
const movimentoController = require('../controller/movimentoController');

const routes = express.Router();

routes.get('/movimento', movimentoController.searchMovement);

module.exports = routes;