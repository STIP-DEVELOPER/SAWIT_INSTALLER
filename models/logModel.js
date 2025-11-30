"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogModel = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../database/config");
const baseModelFields_1 = require("../database/baseModelFields");
exports.LogModel = config_1.sequelize.define('Log', {
    ...baseModelFields_1.BaseModelFields,
    deviceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    deviceName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: sequelize_1.DataTypes.ENUM('info', 'warning', 'error'),
        allowNull: false,
        defaultValue: 'info'
    }
}, {
    tableName: 'log',
    timestamps: true,
    underscored: true
});
