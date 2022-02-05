const express = require('express');
const routes = express.Router();
const newsController = require('../app/cotrollers/NewsControllers');

routes.get('/aa', newsController.index);
routes.get('/:slug', newsController.slug);
routes.get('/', newsController.show);

module.exports = routes;
