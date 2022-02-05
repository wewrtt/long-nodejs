const express = require('express');
const routes = express.Router();
const personController = require('../app/cotrollers/PersonController');
routes.get('/create', personController.create);
routes.post('/store', personController.store);
routes.post('/handle_form_action', personController.handle_form_action);
routes.post('/handle_restore_form', personController.handle_restore_form);
routes.put('/:id', personController.update);
routes.delete('/:id', personController.delete);
routes.patch('/:id/restore', personController.restore);
routes.delete('/:id/delete', personController.destroy);
routes.get('/:id/edit', personController.edit);
routes.get('/:slug', personController.show);

module.exports = routes;
