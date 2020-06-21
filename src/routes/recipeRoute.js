const express = require("express");
const recipeRouter = express.Router();

const RecipeController = require("../controllers/recipeController");

const controller = new RecipeController();

recipeRouter.get("/", controller.recipeWithGif);

module.exports = recipeRouter;
