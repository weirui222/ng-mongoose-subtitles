var mongoose = require('mongoose');

var scriptSchema = new mongoose.Schema({
  duration: String,
  line1: String,
  line2: String
}, {collection: 'script'});

var subtitleSchema = new mongoose.Schema({
  title: String,
  subtitles: [scriptSchema]
}, {collection: 'subtitle'});

var Subtitle = mongoose.model('Subtitle', subtitleSchema);
var Script = mongoose.model('Script', scriptSchema);

module.exports = {
  Subtitle: Subtitle,
  Script: Script
};
