"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModel = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../database/config");
const baseModelFields_1 = require("../database/baseModelFields");
exports.DeviceModel = config_1.sequelize.define('Device', {
    ...baseModelFields_1.BaseModelFields,
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('active', 'inactive', 'maintenance'),
        allowNull: false,
        defaultValue: 'active'
    },
    fertilizerVolume: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    fertilizeType: {
        type: sequelize_1.DataTypes.ENUM('NPK', 'UREA', 'DOLOMIT', 'MOP', 'KIESERITE', 'ROCK PHOSPHATE'),
        allowNull: false,
        defaultValue: 'NPK'
    },
    speed: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    token: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    }
}, {
    tableName: 'device',
    timestamps: true,
    underscored: true
});
