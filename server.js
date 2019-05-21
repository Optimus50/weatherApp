const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
   res.render('index');
});



app.post('/', (req, res) => {
   res.render('index');
})


app.listen(3000, () => {
   console.log('Example is connected to port 3000')
});