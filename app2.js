var unirest = require("unirest");

var req = unirest("GET", "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php");

req.query({
    "location": "New York"
});

req.headers({
    "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
    "x-rapidapi-key": "1020849c44msh91c51f95ed7713ep18b4cejsnf921d414c10c",
    "useQueryString": true
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
//b0829936cb92fa5027897dee1006e8c1