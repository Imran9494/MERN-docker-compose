const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const recordRoutes = require('./routes/record');

const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://18.208.150.234:5173', 'http://localhost:5173'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use('/record', recordRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
