"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = require("../controllers/logger");
const router = (0, express_1.Router)();
router.get('/', logger_1.loggerController.findAll);
router.post('/', logger_1.loggerController.create);
exports.default = router;
