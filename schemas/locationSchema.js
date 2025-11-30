"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllLocationSchema = exports.findDetailLocationSchema = exports.createLocationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const jwtPayloadSchema_1 = require("./jwtPayloadSchema");
exports.createLocationSchema = joi_1.default.object({
    token: joi_1.default.string().required(),
    latitude: joi_1.default.string().required(),
    longitude: joi_1.default.string().required()
});
exports.findDetailLocationSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    id: joi_1.default.string().required()
});
exports.findAllLocationSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    page: joi_1.default.string().optional(),
    size: joi_1.default.string().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional(),
    startDate: joi_1.default.string().allow('').optional(),
    endDate: joi_1.default.string().allow('').optional(),
    status: joi_1.default.string().valid('active', 'inactive', 'maintenance').optional()
});
