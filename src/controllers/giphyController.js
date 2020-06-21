const fetch = require("node-fetch");
const env = require("../../config");

class GiphyController {
  getGiphyURL(recipeArray) {
    const recipesWithGif = recipeArray.map(async (recipe) => {
      return await getGiphyData(recipe);
    });
    return recipesWithGif;

    function getGiphyData(recipe) {
      return fetch(
        `https://api.giphy.com/v1/gifs/search?q=${recipe.title}&api_key=${env.giphyKEY}&limit=1&rating=g`
      )
        .then((res) => res.json())
        .then((json) => {
          const { data } = json;
          return data;
        });
    }
  }
}

module.exports = GiphyController;
