"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllDeviceSchema = exports.findDetailDeviceSchema = exports.removeDeviceSchema = exports.updateDeviceSchema = exports.createDeviceSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const jwtPayloadSchema_1 = require("./jwtPayloadSchema");
exports.createDeviceSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    name: joi_1.default.string().required(),
    status: joi_1.default.string().valid('active', 'inactive', 'maintenance').required(),
    fertilizerVolume: joi_1.default.number().integer().positive().required(),
    fertilizeType: joi_1.default.string()
        .valid('NPK', 'UREA', 'DOLOMIT', 'MOP', 'KIESERITE', 'ROCK PHOSPHATE')
        .required(),
    speed: joi_1.default.number().integer().positive().required()
});
exports.updateDeviceSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    id: joi_1.default.number().integer().positive().required(),
    name: joi_1.default.string().optional(),
    status: joi_1.default.string().valid('active', 'inactive', 'maintenance').optional(),
    fertilizerVolume: joi_1.default.number().integer().positive().optional(),
    fertilizeType: joi_1.default.string()
        .valid('NPK', 'UREA', 'DOLOMIT', 'MOP', 'KIESERITE', 'ROCK PHOSPHATE')
        .optional(),
    speed: joi_1.default.number().integer().positive().optional()
});
exports.removeDeviceSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    id: joi_1.default.number().integer().positive().required()
});
exports.findDetailDeviceSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    id: joi_1.default.number().integer().positive().required()
});
exports.findAllDeviceSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional(),
    startDate: joi_1.default.string().allow('').optional(),
    endDate: joi_1.default.string().allow('').optional(),
    status: joi_1.default.string().valid('active', 'inactive', 'maintenance').optional()
});
