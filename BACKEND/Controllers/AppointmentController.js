const Appointment = require('../Models/Appointment');

// Function to book an appointment
exports.bookAppointment = async (req, res) => {
    try {
        const { patientName, doctorName, date, time, symptoms } = req.body;
        const appointment = new Appointment({ patientName, doctorName, date, time, symptoms });
        await appointment.save();
        res.status(201).json({ message: 'Appointment booked successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to book appointment' });
    }
};

// Function to get all appointments
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
};
