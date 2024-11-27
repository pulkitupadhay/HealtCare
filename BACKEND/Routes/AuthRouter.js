const { signup, login } = require('../Controllers/AuthController');
const User = require('../Models/User');


const router = require('express').Router();

router.post('/login',login);
router.post('/signup', signup);


module.exports = router;
