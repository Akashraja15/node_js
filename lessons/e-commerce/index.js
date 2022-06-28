const express = require('express');
const app = express();


app.use(express.static('public'));  // It is used to display the static files, like images or anything eg. css files too
app.set('view engine','ejs');



app.get('/',(req,res) => {
    res.render('home');
    // res.send('Welcome');
});

app.get('/about',(req,res) => {
    res.send('About Page is Displaying....');
});



                // CLIENT SIDE RENDERING
app.get('/api',(req,res) => {
    res.json({
        name: "Akash Raja"
    });
});

app.listen(3000);