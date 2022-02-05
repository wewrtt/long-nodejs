const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const CourseControllers = require('../app/cotrollers/CourseControllers');
//routes.get('/create', CourseControllers.create);
routes.get('/create',urlencodedParser, CourseControllers.create);
routes.post('/store', CourseControllers.store);
routes.get('/:id/edit', CourseControllers.edit);
routes.post('/handle_form_action', CourseControllers.handle_form_action);
routes.put('/:id', CourseControllers.update);
routes.patch('/:id/restore', CourseControllers.restore);
routes.delete('/:id', CourseControllers.delete);
routes.delete('/:id/deletevv', CourseControllers.deletevv);
routes.get('/:slug', CourseControllers.show);

module.exports = routes;
