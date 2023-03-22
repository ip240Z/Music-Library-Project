export default class Artist{
constructor(name, albumList = [], songList = []){
    this.name = name;
    this.albumList = albumList;
    this.songList = songList;
}
}