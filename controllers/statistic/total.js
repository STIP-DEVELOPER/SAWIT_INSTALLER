"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.total = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestHandler_1 = require("../../utilities/requestHandler");
const user_1 = require("../../models/user");
const deviceModel_1 = require("../../models/deviceModel");
const total = async (req, res) => {
    try {
        const totalAdmin = await user_1.UserModel.count({
            where: {
                deleted: 0,
                role: 'admin'
            }
        });
        const totalSuperAdmin = await user_1.UserModel.count({
            where: {
                deleted: 0,
                role: 'superAdmin'
            }
        });
        const totalDevice = await deviceModel_1.DeviceModel.count({
            where: {
                deleted: 0
            }
        });
        const payload = {
            totalAdmin,
            totalSuperAdmin,
            totalDevice
        };
        const response = response_1.ResponseData.success({
            data: payload
        });
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.total = total;
