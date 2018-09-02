// Music Website
const SongPiece = {
    verse: 'Verse',
    refrain: 'Refrain',
    chorus: 'Chorus',
    comments: 'Comments'
};

class Song {
    constructor(song, artist) {
        this.song = song;
        this.artist = artist;
        this.comments = [];
        this.songPieces = [];
    }
    verse(vname, verse) {
        this.songPieces.push({ type: SongPiece.verse, vname, verse });
        return this;
    }
    refrain(rname, refrain) {
        this.songPieces.push({ type: SongPiece.refrain, rname, refrain });
        return this;
    }
    chorus(cname, chorus) {
        this.songPieces.push({ type: SongPiece.chorus, cname, chorus });
        return this;
    }
    comment(username, comment) {
        this.comments.push({ username, comment });
        return this;
    }

    print() {
        let output = `Song: ${this.song}\nArtist: ${this.artist}`;

        for (let i = 0; i < this.songPieces.length; i++) {
            switch (this.songPieces[i].type) {
                case SongPiece.verse:
                    output += `\n\n[${this.songPieces[i].vname}]\n${this.songPieces[i].verse}\n`;
                    break;
                case SongPiece.refrain:
                    output += `\n\n[${this.songPieces[i].rname}]\n${this.songPieces[i].refrain}\n`;
                    break;
                case SongPiece.chorus:
                    output += `\n\n[${this.songPieces[i].cname}]\n${this.songPieces[i].chorus}\n`;
                    break;
            }
        }
        // add comments
        for (let i = 0; i < this.comments.length; i++) {
            output += `\n\n[${this.comments[i].username}]\n${this.comments[i].comment}\n`;
        }
        return output;
    }
}
