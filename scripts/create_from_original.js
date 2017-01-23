// GET the original script by some id
// change the title to something else
// insert that thing in the database as a new document

var models = require('../models/subtitle');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/subtitles');


// models.Subtitle.findOne({
//   title: "original"
// }, function(err, original) {
//   if (original) {
//     console.log(original.subtitles)
//     models.Subtitle.create({
//       title: "derp derp",
//       subtitles: original.subtitles
//       }, function(err, subtitle) {
//
//       }
//     );
//   }
// });

// models.Subtitle.find({}, function(err, subtitles) {
//   var subtitlesList = [];
//   subtitles.forEach(function(subtitle){
//     // subtitlesList.push({
//     //   title: subtitle.title,
//     //   id: subtitle._id
//     // });
//     subtitlesList.push(subtitle.title);
//   });
//   console.log(subtitlesList)
//
// function parse(subtitList) {
//   subtitlesList
// }

// 
// models.Subtitle.findById("req.params.id", function(err, subtitle) {
//   console.log(subtitle);
// });
