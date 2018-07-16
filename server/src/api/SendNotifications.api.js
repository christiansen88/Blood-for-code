'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Response } from 'express';
var typedi_1 = require("typedi");
var routing_controllers_1 = require("routing-controllers");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.login = function (resp) {
        return "sss";
    };
    __decorate([
        routing_controllers_1.Get('/login'),
        __param(0, routing_controllers_1.Res())
    ], AuthController.prototype, "login", null);
    AuthController = __decorate([
        routing_controllers_1.JsonController(),
        typedi_1.Service()
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
