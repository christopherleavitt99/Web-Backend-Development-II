const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Denise Leavitt');
});

module.exports = routes;

