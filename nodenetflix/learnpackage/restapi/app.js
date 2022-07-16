let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 9870;

const genre = [
    {
        "genre_id":11,
        "genre_name":"Thriller"
    },
    {
        "genre_id":83,
        "genre_name":"Sci-fi"
    },
    {
        "genre_id":105,
        "genre_name":"Mexican Comedies"
    },
    {
        "genre_id":180,
        "genre_name":"Documentary"
    },
    {
        "genre_id":262,
        "genre_name":"Period Drama"
    },
    {
        "genre_id":500,
        "genre_name":"Gay & Lesbian Dramas"
    },
    {
        "genre_id":452,
        "genre_name":"Anime Dramas"
    },
    {
        "genre_id":869,
        "genre_name":"Dark Comedies"
    }
// "384":"Independent Dramas"
// "561":"Films for ages 8 to 10"
// "651":"Thrillers based on a book"
// "783":"Children & Family Films"
// "794":"Steamy Dramas"
// "798":"Brazilian Films"
// "799":"Japanese Thrillers"
// "875":"Critically-acclaimed Independent Films"
// "899":"Critically-acclaimed Action & Adventure"
// "920":"Films Based on Real Life"
]

const quicksearch = [
    { 
        "id":29641,
        "title":"Call the Midwife",
        "genre":"Period Drama",
        "year":2012,
        "avgrating":4.433472,
        "imdbrating":8.4,
        "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMjAwNzc1MzVeQTJeQWpwZ15BbWU4MDQzODgzMjEx._V1_SX300.jpg",
        "synopsis":"This period drama set in impoverished East London in the 1950s follows a newly qualified midwife and her colleagues at a nursing convent."
    },
    { 
        "id":43924,
        "title":"Ex Machina",
        "genre":"Sci-fi",
        "year":2015,
        "avgrating":3.6695597,
        "imdbrating":7.7,
        "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg",
        "synopsis":"A coder at a tech company wins a week-long retreat at the compound of his company&#39;s CEO, where he&#39;s tasked with testing a new artificial intelligence."
    },
    { 
        "id":43924,
        "title":"20 Feet from Stardom",
        "genre":"Documentary",
        "year":2013,
        "avgrating":4.139494,
        "imdbrating":7.4,
        "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxNDY2NjMwNF5BMl5BanBnXkFtZTcwNzExMDg0OQ@@._V1_SX300.jpg",
        "synopsis":"Winner of the 2014 Academy Award for Best Documentary Feature, this film takes a look at the world of backup vocalists and the legends they support."
    },
    { 
        "id":61662,
        "title":"Mercy Black",
        "genre":"Thriller",
        "year":2019,
        "avgrating":0,
        "imdbrating":9.4,
        "poster":"https://m.media-amazon.com/images/M/MV5BOWY2Mjc3NzAtMmExOS00MzM1LWJjYjktYzg0NTYzMmY3ZTg3XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
        "synopsis":"Fifteen years after a traumatic crime, a woman is released from psychiatric care and tries to drive out an evil spirit that continues to haunt her."
    },
    { 
        "id":26983,
        "title":"Carrie",
        "genre":"Thriller",
        "year":2002,
        "avgrating":3.4461,
        "imdbrating":5.5,
        "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMmIzYmFkZTUtNTRiMy00ZDk4LWJjNDUtMzQxMTI1MDlhYWUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "synopsis":"This remake of the classic 1976 horror flick finds misfit Carrie getting revenge on all the cool people who&#39;ve bullied her over the years."
    }
]


app.get('/',(req,res) => {
    res.send('Express Server default')
})

app.get('/genre',(req,res) => {
      res.send(genre)
})

app.get('/quicksearch',(req,res) => {
    res.send(quicksearch)
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Express Server listening on port ${port}`)
  })