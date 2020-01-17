const shortUrl = require('../../components/shortener');

async function index(req, res, next) {
    try {
        const hash = req.params.hash;

        const orgUrl = await shortUrl.retrieve(hash);

        return res.redirect(orgUrl.URL);
    } catch (err) {
        return next(err);
    }
}

async function create(req, res, next) {
    try {
        const { expiry = null, url } = req.body;

        if (!url || typeof url !== 'string') {
            return res.status(409).json({
                message: 'Please pass URL tobe shorten as key `url`'
            });
        }

        const data = await shortUrl.shortenUrl(url, expiry);

        return res.json(data.url);
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    index,
    create,
};
