const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const checkAuth = require("../helpers/jwt");
const userController = require('../controllers/user')


// user/login
// Users should be able to login using email and password.
router.post("/login", userController.login);

// user/signup
// Created one extra API to have user data for login
router.post("/signup", userController.signup);

// user/signup
// Created one extra API to have user data for login
router.post("/logout", checkAuth ,userController.logout);

module.exports =router;