const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  type: { type: String, required: true },
});

module.exports = mongoose.model('Message', MessageSchema);
