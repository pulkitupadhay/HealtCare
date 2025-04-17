const express = require('express');
const { bookAppointment, getAppointments } = require('../Controllers/AppointmentController');
const ensureAuthenticated = require('../Middlewares/Auth');
const {verifyToken}=require('../Middlewares/authMiddleware')

const router = express.Router();
console.log('bookAppointment:',ensureAuthenticated, bookAppointment);
console.log('getAppointments:',ensureAuthenticated, getAppointments);

// Define routes
// router.post('/some-path', someMiddleware, someControllerFunction);

router.get('/', verifyToken, getAppointments);
router.post('/book', bookAppointment);
router.get('/', getAppointments);

module.exports = router;

