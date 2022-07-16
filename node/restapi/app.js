let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()

let port = process.env.PORT || 9870;

app.get('/',(req,res) => {
    res.send('Express Server default')
})

app.get('/location',(req,res) => {
    res.send('This is location route')
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Express Server listening on port ${port}`)
})