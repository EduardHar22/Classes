"use strict"

class Song{
    constructor(name, artist ){
        this.name = name;;
        this.artist = artist
    };
};

const song1 = new Song("hey jude", "the beatles");

const song2 = new Song("jaded", "aerosmith");

class Playlist{
    constructor(){
        this.playlistArr = [];
        this.current = 0;
    }

    add(song){
        return this.playlistArr.push(song);
    };

    play(){
        let currentSong = this.playlistArr[this.current];
        console.log(`${currentSong.name} started to play`);
    };

    next(){
        if(this.current +1 >= this.playlistArr.length){
            this.current = 0
        }
        else 
            ++this.current;
        this.play();
    };

    stop(){
        console.log(`${this.playlistArr[this.current].name} stopped`)
    };
};

const playlist = new Playlist();

playlist.add(song1);
playlist.add(song2);
playlist.play()
playlist.play()
playlist.next()
playlist.next()
playlist.stop()
playlist.play()