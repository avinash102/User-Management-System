const express = require('express');

const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root route
 * @method GET
 */
route.get('/', services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */
route.get('/add-user', services.add_user);

/**
 * @description update users
 * @method GET /update-user
 */
route.get('/update-user', services.update_user);

// Api
route.post('/api/v1/users', controller.createUser);
route.get('/api/v1/users', controller.getAllUser);
route.put('/api/v1/users/:id', controller.updateUser);
route.delete('/api/v1/users/:id', controller.deleteUser);

module.exports = route;
