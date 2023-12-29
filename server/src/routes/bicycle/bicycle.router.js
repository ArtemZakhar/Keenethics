const express = require('express');
const {
  httpGetAllBicycles,
  httpAddNewBicycle,
  httpDeleteItem,
  httpUpdateBicycle,
} = require('./bicycle.controller');

const bicycleRouter = express.Router();

bicycleRouter.get('/', httpGetAllBicycles);
bicycleRouter.post('/', httpAddNewBicycle);
bicycleRouter.put('/:id', httpUpdateBicycle);
bicycleRouter.delete('/:id', httpDeleteItem);

module.exports = bicycleRouter;
