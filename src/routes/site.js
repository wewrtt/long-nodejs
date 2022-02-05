const express = require('express');
const routes = express.Router();
const stieControllers = require('../app/cotrollers/StieControllers');

routes.get('/search', stieControllers.search);
routes.get('/:slug', stieControllers.slug);
routes.get('/', stieControllers.index);

module.exports = routes;
