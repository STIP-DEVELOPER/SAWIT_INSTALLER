"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statistic_1 = require("../controllers/statistic");
const router = (0, express_1.Router)();
router.get('/total', statistic_1.statisticController.total);
exports.default = router;
