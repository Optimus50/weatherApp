const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.set('view engine', 'ejs');
app.use(express.static('public'));


// import the middleware into the application
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
   res.render('index');
});


app.post('/', (req, res) => {
   res.render('index');
   console.log(req.body.city);
})


app.listen(3000, () => {
   console.log('Example is connected to port 3000')
});