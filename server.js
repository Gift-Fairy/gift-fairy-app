const express = require('express');
// const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;
// import sequelize connection
const sequelize = require('./config/connection.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Loads the handlebars module
const handlebars = require('express-handlebars');

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static('public'))

app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
.then(() =>
{
    app.listen(PORT, () =>
    {
        console.log(`App listening to port ${PORT}`);
    });
});