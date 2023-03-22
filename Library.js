export default class Library {
    constructor(songs = [], albums = [], artists =[], genres = [], users = []){
        this.songs = songs;
        this.albums = albums;
        this.artists = artists;
        this.genres = genres;
        this.users = users;
    };

    addSong(song) {
        this.songs.push(song);
    }
    updateSongList(){
        let songsToAdd = this.albums
        this.songs.push()
    }



    addAlbum(album) {
        this.albums.push(album);
    }
    removeAlbum(album) {
        this.albums.splice(this.albums.indexOf(album), 1);
    }
    
    addUser(user) {
        this.users.push(user);
    }

    songToAlbum(song, targetAlbum) {
        this.albums.indexOf(targetAlbum).push(song)
    }
}

