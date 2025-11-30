"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const logs_1 = __importDefault(require("../../logs"));
const requestHandler_1 = require("../../utilities/requestHandler");
const deviceModel_1 = require("../../models/deviceModel");
const logModel_1 = require("../../models/logModel");
const loggerSchema_1 = require("../../schemas/loggerSchema");
const createLogger = async (req, res) => {
    const { error: validationError, value: validatedData } = (0, requestHandler_1.validateRequest)(loggerSchema_1.createLoggerSchema, req.body);
    if (validationError)
        return (0, requestHandler_1.handleValidationError)(res, validationError);
    try {
        const device = await deviceModel_1.DeviceModel.findOne({
            where: { token: validatedData.token }
        });
        if (device == null || device.id == null) {
            const message = `Logger: Device not found`;
            logs_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error({ message }));
        }
        const payload = {
            deviceId: device.id,
            deviceName: device.name,
            message: validatedData.message,
            level: validatedData.level
        };
        await logModel_1.LogModel.create(payload);
        logs_1.default.info(`Create Logger request result successfully`);
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response_1.ResponseData.success({}));
    }
    catch (error) {
        return (0, requestHandler_1.handleServerError)(res, error);
    }
};
exports.createLogger = createLogger;
