// server.js
const next = require('next');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});
const cookiesMiddleware = require('universal-cookie-express');
const compression = require('compression');

const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const express = require('express');

app.prepare().then(() => {
  express()
    .use(cookiesMiddleware())
    .use(compression())
    .use(handler)
    .listen(process.env.PORT);
});
