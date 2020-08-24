class Movie {
    constructor(title, category, duration) {
        this.title = title;
        this.category = category;
        this.duration = duration;
    }

    watch() {
        return `Kamu menonton film ${this.title} dengan kategori ${this.category} berdurasi ${this.duration}.`;
    }
}


let data1 = new Movie('Suspicious Partner', 'Romance', '60 Minutes');
console.log(data1.watch());

class SoundTrack extends Movie {
    constructor(title, category, duration, titleSong, singer) {
        super(title, category, duration);
        this.titleSong = titleSong;
        this.singer = singer;
    }

    movieSoundTrack() {
        return `Film ${this.title} memiliki lagu soundtrack berjudul ${this.titleSong} yang dinyanyikan oleh ${this.singer}.`;
    }
}

let data2 = new SoundTrack('Suspicious Partner', 'Romance', '60 Minutes', 'How do you feel', 'Ridho Majid');
console.log(data2.movieSoundTrack());


class Channel extends Movie {
	constructor(title, category, duration, channelName) {
		super(title, category, duration);
		this.channelName = channelName;
	}

	streamAt(){
		return `Film ${this.title} ditayangkan di ${this.channelName}`;
	}
}

let data3 = new Channel('Suspicious Partner', 'Romance', '60 minutes', 'Netflix');
console.log(data3.streamAt());
