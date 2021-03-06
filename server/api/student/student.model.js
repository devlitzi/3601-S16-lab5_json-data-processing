'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  gender: String,
  email: String,
  phone: String,
  address: String,
  courses: [],
  major1: String,
  major2: String,
  credits: String,
  gpa: String,
  majors: String,
  completedCourses: String,
  rank: String
});

export default mongoose.model('Student', StudentSchema);
