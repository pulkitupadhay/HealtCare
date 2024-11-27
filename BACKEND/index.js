const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./Routes/AuthRouter'); 
const appointmentRoutes = require('./Routes/appointmentRoutes'); 
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes); 
app.use('/appointments', appointmentRoutes); 
