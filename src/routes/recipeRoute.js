const express = require('express');
const recipeRouter = express.Router();

const recipeController = require('../controllers/recipeController');

const controller = new recipeController();

recipeRouter.get('/', controller.getRecipe);

module.exports = recipeRouter;