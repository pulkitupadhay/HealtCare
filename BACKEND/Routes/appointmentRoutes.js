const express = require('express');
const { bookAppointment, getAppointments } = require('../Controllers/AppointmentController');
const { verifyToken } = require('../Middlewares/authMiddleware');

const router = express.Router();

// Define routes
router.post('/book', verifyToken, bookAppointment);
router.get('/', verifyToken, getAppointments);

module.exports = router;
