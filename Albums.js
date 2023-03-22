export default class Album{
    constructor(name, artistName, releaseYear, genre, songList = []) {
        this.name = name;
        this.artistName = artistName;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.songList = songList;
    }
    addSongToAlbum(song){
        this.songList.push(song)
    }
}