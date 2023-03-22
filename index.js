
import Library from './Library.js'
import Song from './Songs.js';
import Album from './Albums.js';
// import Artist from './Artists.js';
import {User, Playlist} from './Users.js';

let musicLibrary = new Library();
let ian = new User('Ian');
musicLibrary.addUser(ian)

ian.createPlaylist('Zeppelin')
ian.createPlaylist('rap')

let sitl = new Song('Sky\'s The Limit', 'Notorious B.I.G.', 'Life After Death', 4.5)
let tsrts = new Song('The Song Remains The Same', 'Led-Zeppelin', 'Houses of The Holy', 8.32);
let dd = new Song("Dancing Days", 'Led-Zeppelin', 'Houses of The Holy', 4.30)
let hoth = new Album('Houses of The Holy', 'Led-Zeppelin', 1973, 'Classic-Rock', [tsrts, dd])

musicLibrary.addSong(sitl)
musicLibrary.addSong(dd)
musicLibrary.addSong(tsrts);
musicLibrary.addAlbum(hoth);

ian.addToPlaylist(sitl, 'rap')
ian.addToPlaylist(dd, 'Zeppelin')

ian.createPlaylist('Favorites');
ian.addToPlaylist(dd, 'Favorites');
ian.addToPlaylist(sitl, 'Favorites');
ian.addToPlaylist(tsrts, 'Favorites');
console.log(ian.playlists)
console.log(ian.playlists[2])
console.log(musicLibrary)