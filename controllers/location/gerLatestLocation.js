"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDeviceLatestLocations = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const deviceModel_1 = require("../../models/deviceModel");
const locationModel_1 = require("../../models/locationModel");
const requestHandler_1 = require("../../utilities/requestHandler");
const getAllDeviceLatestLocations = async (req, res) => {
    try {
        const devices = await deviceModel_1.DeviceModel.findAll({
            attributes: ['id', 'name'],
            include: [
                {
                    model: locationModel_1.LocationModel,
                    as: 'locations',
                    attributes: ['latitude', 'longitude'],
                    limit: 1,
                    order: [['created_at', 'DESC']],
                    separate: true
                }
            ],
            where: { deleted: false },
            order: [['name', 'ASC']]
        });
        const result = devices.map((device) => ({
            deviceId: device.id.toString(),
            deviceName: device.name,
            deviceLatitude: device.locations?.[0]?.latitude || null,
            deviceLongitude: device.locations?.[0]?.longitude || null
        }));
        return res.status(http_status_codes_1.StatusCodes.OK).json(response_1.ResponseData.success({ data: result }));
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.getAllDeviceLatestLocations = getAllDeviceLatestLocations;
