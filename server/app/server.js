"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = process.env.PORT || 8000;
// Serve the application at the given port
app.listen(port, function () {
    //console.log(`Listening at http://localhost:${port}/`);
});
