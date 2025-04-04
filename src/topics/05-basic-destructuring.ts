
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];

const { author } = audioPlayer.details;

console.log('Song', audioPlayer.song);
console.log('Song', audioPlayer.details.author);

console.log('Song', author);

