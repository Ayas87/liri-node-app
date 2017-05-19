let keys = require('./keys.js');
let command = process.argv[2];
let input = process.argv[3];
let Twitter = require('twitter');

let client = new Twitter(keys);
let options = {count: 20};


if (command === 'my-tweets') {
    // This will show your last 20 tweets and when they were created at in your terminal/bash window.
    client.get('statuses/user_timeline', options, function(error, tweets, response) {
        console.log(tweets)
    })
    console.log('twitter');
} else if (command === 'spotify-this-song') {
    console.log('spotify');
} else if (command === 'movie-this') {
    console.log('omdb');
} else if (command === 'do-what-it-says') {
    console.log('reads txt');
} else {
    console.log('Invalid command \n The commands are: \n my-tweets \n spotify-this-song \n movie-this \n do-what-it-says');
}
