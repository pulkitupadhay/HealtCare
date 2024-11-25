const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./Routes/AuthRouter'); // Existing auth routes
const appointmentRoutes = require('./Routes/appointmentRoutes'); // New appointment routes
require('dotenv').config();
require('./Models/db'); // Ensure database connection
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes); // Existing auth routes
app.use('/appointments', appointmentRoutes); // New appointment routes
