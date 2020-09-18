const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const expsession = require('express-session');
const flash = require('connect-flash');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(expsession({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Global Variables
app.use((req, res, next) => {
    res.locals.succes_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error');
    next();
});


// Routes
app.use(require('./routes/index.routes'));

// Static Files

module.exports = app;