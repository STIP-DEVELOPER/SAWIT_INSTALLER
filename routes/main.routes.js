"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouterV1 = void 0;
const appCheck_routes_1 = __importDefault(require("./appCheck.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const device_routes_1 = __importDefault(require("./device.routes"));
const myProfile_routes_1 = __importDefault(require("./myProfile.routes"));
const statistic_routes_1 = __importDefault(require("./statistic.routes"));
const location_routes_1 = __importDefault(require("./location.routes"));
const logger_routes_1 = __importDefault(require("./logger.routes"));
const appRouterV1 = (app) => {
    app.use('/api/v1', appCheck_routes_1.default);
    app.use('/api/v1/auth', auth_routes_1.default);
    app.use('/api/v1/users', user_routes_1.default);
    app.use('/api/v1/devices', device_routes_1.default);
    app.use('/api/v1/my-profiles', myProfile_routes_1.default);
    app.use('/api/v1/statistic', statistic_routes_1.default);
    app.use('/api/v1/locations', location_routes_1.default);
    app.use('/api/v1/loggers', logger_routes_1.default);
};
exports.appRouterV1 = appRouterV1;
