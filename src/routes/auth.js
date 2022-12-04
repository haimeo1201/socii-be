const { login, register } = require("../controller/authController.js");

const express = require("express");
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The user email
 *         password:
 *           type: string
 *           description: The user password
 *       example:
 *         id: 1
 *         email: alice@123
 *         password: 123
 */

router.post("/register", register);
/**
 * @swagger
 * tags:
 *  name: Register
 *  description: Register new user
 * /api/auth/register:
 *  post:
 *      tags: [Register]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              default: alice@123
 *                          password:
 *                              type: string
 *                              default: 123
 *      responses:
 *          201:
 *              description: Create user succesfully
 *          403:
 *              description: No user match email provided
 *          500:
 *              description: Something wrong while querying
 */

router.post("/login", login);

/**
 * @swagger
 * tags:
 *  name: Login
 *  description: Login using email and password
 * /api/auth/login:
 *  post:
 *      tags: [Login]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              default: alice@123
 *                          password:
 *                              type: string
 *                              default: 123
 *      responses:
 *          200:
 *              description: Login successfully, return a token
 *          403:
 *              description: No user match email provided
 *          500:
 *              description: Something wrong while querying
 */

module.exports = router;
