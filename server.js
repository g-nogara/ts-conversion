const express = require('express');

const recipeRoute = require('./src/routes/recipeRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/recipes', recipeRoute);

const http = require('http').Server(app);
const port = process.env.PORT || 8080;

http.listen(port, () => console.log(`Listening on port ${port}`));