"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationController = void 0;
const create_1 = require("./create");
const findAll_1 = require("./findAll");
const findDetail_1 = require("./findDetail");
const gerLatestLocation_1 = require("./gerLatestLocation");
exports.locationController = {
    findAll: findAll_1.findAllLocation,
    findDetail: findDetail_1.findDetailLocation,
    getAllLatestLocations: gerLatestLocation_1.getAllDeviceLatestLocations,
    create: create_1.createLocation
};
