let keys = require('./keys.js');
let fs = require('fs');
let command = process.argv[2];
let input = process.argv[3];
//Twitter
function getTwitter() {
    let Twitter = require('twitter');
    let client = new Twitter(keys.twitterKeys);
    let options = {
        screen_name: 'RandyLam87',
        count: 20,
        trim_user: 1
    };

    client.get('statuses/user_timeline', options, function (error, tweets, response) {
        for (i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }
    });
}

//Spotify
function getSpotify(input) {
    let spotify = require('spotify');
    spotify.search({
        type: 'track',
        query: input
    }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        for(i=0; i<data.tracks.items.length; i++){
            console.log('Artist: ' + data.tracks.items[i].artists[0].name);
            console.log('Song Name: ' + data.tracks.items[i].name);
            console.log('Song Name: ' + data.tracks.items[i].preview_url);
            console.log('Album: ' + data.tracks.items[i].album.name + '\n');
        }
    });
}

//IMDB
function getMovieInfo() {
    let request = require('request');
    let queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&r=json";

    request(queryUrl, function (error, response, body) {
        if (error) {
            return console.log(error);
        }
        if (!error && response.statusCode === 200) {
            var bodyParse = JSON.parse(body)
            console.log('Title: ' + bodyParse.Title);
            console.log('Year: ' + bodyParse.Year);
            console.log('IMDB Rating: ' + bodyParse.imdbRating);
            console.log('Country: ' + bodyParse.Country);
            console.log('Language: ' + bodyParse.Language);
            console.log('Actors: ' + bodyParse.Actors);
            console.log('rotten tomatoes url');
        } else {
            console.log('No response');
        }
    });
}

//Do What It Says
function getDoWhatItSays(){
    fs.readFile('random.txt','utf8', function(error, data){
        let newData = data.split(',');
        liri(newData[0],newData[1])
    });
}

//LIRI
function liri (command, input) {
    if (command === 'my-tweets') {
        getTwitter();
    } else if (command === 'spotify-this-song') {
        getSpotify(input);
    } else if (command === 'movie-this') {
        getMovieInfo();
    } else if (command === 'do-what-it-says') {
        getDoWhatItSays();
    } else {
        console.log('Invalid command \n The commands are: \n my-tweets \n spotify-this-song \n movie-this \n do-what-it-says');
    }
}

liri(command, input);