const URLShortener = require('short-url');

const { DOMAIN, DB_URL } = require('../../config/environment');
const logger = require('../../components/logger');

const options = {
    characters: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minHashCount: 4,
    domain: DOMAIN,
};

const ShortUrl = new URLShortener(DB_URL, logger.error, options);

module.exports = ShortUrl;
