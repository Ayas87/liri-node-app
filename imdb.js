var request = require('request');

var movieName = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

function getMovieInfo () {
    request(queryUrl,function (error, response, body) {
    if(error) {
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
    }    
});
}
getMovieInfo();