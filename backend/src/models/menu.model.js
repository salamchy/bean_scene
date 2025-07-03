import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['Hot', 'Cold'],
    required: true
  },
  type: {
    type: String,
    enum: ['Milk', 'Black', 'Other'],
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const menuModel = mongoose.model('Menu', menuSchema);

export default menuModel;