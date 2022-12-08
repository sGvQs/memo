const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const ThreadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 20,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Customer || mongoose.model('Thread', ThreadSchema);
