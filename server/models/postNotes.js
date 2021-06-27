const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  eventdata: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  organiser: {
    type: String,
    required: true,
  },
  isRegistered: {
    type: Boolean,
    required: true,
  },
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const note = mongoose.model("Note", noteSchema);
module.exports = note;
