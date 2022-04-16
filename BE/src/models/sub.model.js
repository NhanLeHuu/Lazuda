const cheerio = require("cheerio");

function options (url) {
    return {
        uri: url,
        transform: function (body) {
            return cheerio.load(body);
        }
    }
};

module.exports = options;