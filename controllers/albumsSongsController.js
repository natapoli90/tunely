
// albumsSongsController
var db = require('../models');


function index(req, res) {
  // FILL ME IN !
  db.Song.find({}, function(err, allSongs) {
    res.json(allSongs);
  });
}

function show(req, res) {
  db.Song.findById(req.params.songId, function(err, foundSong) {
    if(err) { console.log('albumsSongsController.show error', err); }
    console.log('albumsSongs.show responding with', foundSong);
    res.json(foundSong);
  });
}


// POST '/api/albums/:albumId/songs'
function create(req, res) {
  db.Album.findById(req.params.albumId, function(err, foundAlbum) {
    console.log(req.body);
    var newSong = new db.Song(req.body);  // dangerous, in a real app we'd validate the incoming data
    foundAlbum.songs.push(newSong);
    foundAlbum.save(function(err, savedAlbum) {
      console.log('newSong created: ', newSong);
      res.json(newSong);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
    });
  });
}


module.exports = {
  index: index,
  create: create,
  show: show,
};
