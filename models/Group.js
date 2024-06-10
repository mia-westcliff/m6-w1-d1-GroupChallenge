const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const groupnameRegex = /^[a-z0-9!@#$%^&?*\-+_.]+$/;

const GroupSchema = new Schema({
  groupname: {
    type: String,
    lowercase: true,
    required: [true, 'Group name is required'],
    match: [groupnameRegex, 'Group name can only contain a-z, 0-9, !@#$%^&?*-+_.'],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    match: [emailRegex, 'Please enter a valid email address'],
  },
  mobile: {
    type: Number,
    required: [true, 'Mobile number is required'],
  },
  profile: {
    type: String,
  },
  avatarimage: {
    type: String,
  },
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
