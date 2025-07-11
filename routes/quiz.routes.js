"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const quiz_1 = require("../controllers/quiz");
const router = (0, express_1.Router)();
router.use(middlewares_1.middleware.useAuthorization);
router.get('/', quiz_1.quizController.findAll);
router.get('/detail/:id', quiz_1.quizController.findByDetail);
router.post('/', quiz_1.quizController.create);
router.patch('/', quiz_1.quizController.update);
router.delete('/:id', quiz_1.quizController.remove);
exports.default = router;
