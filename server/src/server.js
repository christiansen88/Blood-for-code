"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var cors = require('cors');
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.initialiseExpressServer = function () {
        var app = routing_controllers_1.createExpressServer();
        app.use(cors());
        routing_controllers_1.useExpressServer(app, {
            defaultErrorHandler: false,
            routePrefix: '/api',
            controllers: [__dirname + '/api/*.api.ts']
        });
        // Server setting
        var port = (process.env.VCAP_PORT || process.env.PORT || 8080);
        var host = (process.env.VCAP_HOST || process.env.HOST || 'localhost');
        app.listen(port, function () {
            console.log("Listening at http://" + host + ":" + port + "/");
        });
    };
    return Server;
}());
new Server().initialiseExpressServer();
