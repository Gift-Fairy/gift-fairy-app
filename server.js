const express = require('express');
const sequelize = require('./config/connection.js');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;
// import sequelize connection

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = 
{
    secret: 'Super secret secret',
    cookies: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore(
    {
        db: sequelize
    })
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));
//Sets our app to use the handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
<<<<<<< HEAD
app.engine('handlebars', handlebars({
layoutsDir: `${__dirname}/views/layouts`
}));
=======
>>>>>>> 220b340bb983564a1854ad61e22b2851d4d759d5

app.use(express.static('public'))

app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout: 'index'});
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