const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const _ = require('lodash');

const root = path.normalize(`${__dirname}/../../..`);

if (!fs.existsSync(path.join(root, '.env'))) {
  fs.writeFileSync(path.join(root, '.env'), fs.readFileSync(path.join(root, '.env.sample')));
}

const env = dotenv.config({ path: path.join(root, '.env') }).parsed;

const all = {
  env: env.NODE_ENV,
  root,
  port: process.env.PORT || 9000,
  ip: process.env.IP || '0.0.0.0',
};

module.exports = _.merge(
  all,
  env,
);
