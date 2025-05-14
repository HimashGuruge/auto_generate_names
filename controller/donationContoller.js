import Donation from '../models/Donation.js';
import QRCode from 'qrcode';

// QR කේතය ජනනය කිරීම
export const generateQR = async (req, res) => {
  try {
    const { donorName, amount, message } = req.body;
    const qrData = `donation-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const qrImage = await QRCode.toDataURL(qrData);

    const newDonation = new Donation({
      donorName,
      amount,
      message,
      qrCode: qrData,
      userId: req.user.id // JWT ටෝකනයෙන් පරිශීලක ID
    });

    await newDonation.save();
    res.json({ qrImage, qrData });
  } catch (err) {
    res.status(500).json({ error: 'QR ජනනය කිරීමට අසමත් විය' });
  }
};

// දන් ලයිස්ට් එක ලබා ගැනීම
export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: 'දත්ත ලබා ගැනීමට අසමත් විය' });
  }
};