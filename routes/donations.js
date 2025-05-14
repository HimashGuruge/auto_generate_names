import express from 'express';
import { generateQR, getDonations } from '../controllers/donations.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

// JWT සත්‍යාපනය සමඟ ආරක්ෂිත රූට්ස්
router.post('/generate-qr', authenticateUser, generateQR);
router.get('/', authenticateUser, getDonations);

export default router;