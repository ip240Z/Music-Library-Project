class Song{
    constructor(name, artistName, album, length = 0, isFavorite = false) {
        this.name = name;
        this.artistName = artistName;
        this.album = album;
        this.length = length;
        this.isFavorite = isFavorite;
    }
}

export default Song