global.__basedir = __dirname+'/../';
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const chalk = require('chalk');
require('./controller/eventController');
require('./utils/pidGenerator');
var passport = require('passport');
var session  = require('express-session');

const app = express();

const actionRouter = require('./routes/action.router');
const recipeRouter = require('./routes/recipe.router');

const actionApiRouter = require('./routes/action.api.router');
const recipeApiRouter = require('./routes/recipe.api.router');
const userApiRouter = require('./routes/user.api.router');
const reportsApiRouter = require('./routes/reports.api.router');

app.set('host', 'localhost');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
  res.header('Access-Control-Allow-Methods', 'GET,PATCH, PUT,POST');
  next();
});

app.use(session({ secret: 'aritra@fusionchats.com' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
/********
 * Action Routes
 */
const authRouter = require('./routes/auth.api.router')(passport);
const isLoggedin = require('./middlewares/authMiddleware').checkAuthentication;
app.use('/', authRouter)
app.use('/actions', actionRouter);
app.use('/recipes', recipeRouter);
/*****
 * API routes
 */
app.use('/api/actions',isLoggedin,actionApiRouter)
app.use('/api/recipes',isLoggedin,recipeApiRouter)
app.use('/api/users',isLoggedin,userApiRouter)
app.use('/api/reports', reportsApiRouter)
/*
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d', chalk.green('✓'), app.get('port'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
