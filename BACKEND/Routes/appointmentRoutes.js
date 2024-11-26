const express = require('express');
const { bookAppointment, getAppointments } = require('../Controllers/AppointmentController');
const { verifyToken } = require('../Middlewares/authMiddleware');

const router = express.Router();

// Define routes
router.post('/some-path', someMiddleware, someControllerFunction);

router.get('/', verifyToken, getAppointments);

module.exports = router;
