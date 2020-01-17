const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function (app) {
  const env = app.get('env');

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  if (env === 'development' || env === 'test') {
    app.use(morgan('dev'));
  }
};
