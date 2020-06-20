class recipeController {

    async getRecipe(req, res) {
       res.status(200).send(req.query.i);
    }
}

module.exports = recipeController;