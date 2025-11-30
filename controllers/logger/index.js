"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerController = void 0;
const create_1 = require("./create");
const findAll_1 = require("./findAll");
exports.loggerController = {
    findAll: findAll_1.findAllLogger,
    create: create_1.createLogger
};
