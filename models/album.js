var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Song = require('./song.js');

var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  imageUrl: String,
  releaseDate: String,
  genres: [String],
  songs: [Song.schema]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
