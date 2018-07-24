global.__basedir = __dirname+'/../';
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const app = express();

const InvoiceRoutes = require('./routes/invoice');

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
/*****
 * API routes
 */
app.use('', InvoiceRoutes)
/*
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d', chalk.green('✓'), app.get('port'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
