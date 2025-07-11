"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceController = void 0;
const create_1 = require("./create");
const findAll_1 = require("./findAll");
const findDetail_1 = require("./findDetail");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.deviceController = {
    findAll: findAll_1.findAllDevice,
    findByDetail: findDetail_1.findDetailDevice,
    create: create_1.createDevice,
    remove: remove_1.removeDevice,
    update: update_1.updateDevice
};
