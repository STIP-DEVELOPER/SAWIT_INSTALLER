"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllLogger = void 0;
const http_status_codes_1 = require("http-status-codes");
const sequelize_1 = require("sequelize");
const pagination_1 = require("../../utilities/pagination");
const requestHandler_1 = require("../../utilities/requestHandler");
const response_1 = require("../../utilities/response");
const loggerSchema_1 = require("../../schemas/loggerSchema");
const logModel_1 = require("../../models/logModel");
const findAllLogger = async (req, res) => {
    const { error: validationError, value: queryParams } = (0, requestHandler_1.validateRequest)(loggerSchema_1.findAllLoggerSchema, req.query);
    if (validationError)
        return (0, requestHandler_1.handleValidationError)(res, validationError);
    try {
        const { page: queryPage, size: querySize, search, pagination, startDate, endDate } = queryParams;
        const page = new pagination_1.Pagination(Number(queryPage) || 0, Number(querySize) || 10);
        const dateFilter = startDate && endDate
            ? {
                createdAt: {
                    [sequelize_1.Op.between]: [new Date(startDate), new Date(endDate)]
                }
            }
            : {};
        const result = await logModel_1.LogModel.findAndCountAll({
            where: {
                deleted: false,
                ...(search && {
                    name: { [sequelize_1.Op.like]: `%${search}%` }
                }),
                ...dateFilter
            },
            ...(pagination === true && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.success({ data: result });
        response.data = page.formatData(result);
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.findAllLogger = findAllLogger;
