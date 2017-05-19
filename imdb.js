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
        console.log(bodyParse.Title);
        console.log(bodyParse.Year);

    }    
});
}

getMovieInfo();