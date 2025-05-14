import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  amount: { type: Number, required: true },
  message: String,
  qrCode: { type: String, unique: true },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // දන් දුන් පරිශීලකයා
});

export default mongoose.model('Donation', donationSchema)