class User{
    constructor(name, playlists = []) {
        this.name = name;
        this.playlists = playlists;
    }


    createPlaylist(listName){
        let listToAdd = new Playlist(listName)
        this.playlists.push(listToAdd);
    }
 

// Gets playlist index target for addToPlaylist method
    getPlaylist = playlist => this.playlists.findIndex(x=>x.name === playlist);


    addToPlaylist(song, playList){
        this.playlists[this.getPlaylist(playList)].songList.push(song);
    }
    removeFromPlaylist(song, playList){
        this.playlists[this.getPlaylist(playList)].songList.pop()
    }

};

class Playlist{
    constructor(name, songList = []) {
        this.name = name;
        this.songList = songList;
    }

};


export {User, Playlist}