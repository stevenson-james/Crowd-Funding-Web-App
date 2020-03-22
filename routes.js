const routes = require('next-routes')();

// : says what will be different
routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show');

module.exports = routes;