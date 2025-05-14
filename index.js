import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import donationRoutes from './routes/donations.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// රූට්ස්
app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);

// MongoDB සම්බන්ධතාවය
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB සම්බන්ධ විය!'))
  .catch(err => console.error('MongoDB දෝෂය:', err));

// සර්වර් ආරම්භය
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`සර්වර් ධාවනය වෙමින්... http://localhost:${PORT}`));