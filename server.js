/*
* Core Module Dependencies
*/
const config = require('./config');
const restify = require('restify');

/*
* Initialize Server
*/
const serverInfo = {
    name: config.NAME,
    version: config.VERSION,
    dtrace: config.DTRACE_STATUS
};
const server = restify.createServer(serverInfo);

// Middleware
server.pre(restify.plugins.pre.dedupeSlashes()); // deduplicates extra slashes found in the URL

server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
    var bunyan = require('bunyan');
    var log = bunyan.createLogger({name: 'myapp'});
    log.info('hi');
});