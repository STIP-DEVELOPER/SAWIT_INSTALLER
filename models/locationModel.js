"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationModel = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../database/config");
const baseModelFields_1 = require("../database/baseModelFields");
exports.LocationModel = config_1.sequelize.define('Location', {
    ...baseModelFields_1.BaseModelFields,
    deviceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    latitude: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'location',
    timestamps: true,
    underscored: true
});
