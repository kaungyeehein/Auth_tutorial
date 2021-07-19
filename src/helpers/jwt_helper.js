const JWT = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {};
            const secret = "some secret";
            const options = {
                expiresIn: '1h',
                issuer: 'kokaung.com',
                audience: userId
            };
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) return reject(err);
                resolve(token);
            });
        });
    }
};