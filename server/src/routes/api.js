const express = require('express');

const bicycleRouter = require('./bicycle/bicycle.router');

const api = express.Router();

api.use('/bicycle', bicycleRouter);

module.exports = api;
