"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocation = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const logs_1 = __importDefault(require("../../logs"));
const requestHandler_1 = require("../../utilities/requestHandler");
const locationSchema_1 = require("../../schemas/locationSchema");
const locationModel_1 = require("../../models/locationModel");
const deviceModel_1 = require("../../models/deviceModel");
const createLocation = async (req, res) => {
    const { error: validationError, value: validatedData } = (0, requestHandler_1.validateRequest)(locationSchema_1.createLocationSchema, req.body);
    if (validationError)
        return (0, requestHandler_1.handleValidationError)(res, validationError);
    try {
        const device = await deviceModel_1.DeviceModel.findOne({
            where: { token: validatedData.token }
        });
        if (device == null || device.id == null) {
            const message = `Device not found with token: ${validatedData.token}`;
            logs_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error({ message }));
        }
        await locationModel_1.LocationModel.create({ ...validatedData, deviceId: device.id });
        logs_1.default.info(`Create Location request result successfully`);
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response_1.ResponseData.success({}));
    }
    catch (error) {
        return (0, requestHandler_1.handleServerError)(res, error);
    }
};
exports.createLocation = createLocation;
