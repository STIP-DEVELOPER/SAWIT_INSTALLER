"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     IMyProfileUpdateRequest:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           minLength: 3
 *           maxLength: 30
 *           nullable: true
 *           example: "John Doe"
 *         userPassword:
 *           type: string
 *           minLength: 6
 *           maxLength: 128
 *           nullable: true
 *           example: "newSecret123"
 *         userWhatsappNumber:
 *           type: string
 *           nullable: true
 *           example: "6232432343"
 *         userRole:
 *           type: string
 *           enum: ['admin', 'superAdmin', 'user']
 *           nullable: true
 *           example: "admin"
 */
/**
 * @swagger
 * /api/v1/my-profiles:
 *   get:
 *     summary: Get user profile detail by ID
 *     tags: [MY PROFILE]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User profile detail
 *       404:
 *         description: User not found
 */
/**
 * @swagger
 * /api/v1/my-profiles:
 *   patch:
 *     summary: Update user profile
 *     tags: [MY PROFILE]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IMyProfileUpdateRequest'
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 */
