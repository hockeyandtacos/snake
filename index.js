const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + './public/css'))
app.use('/js', express.static(__dirname + './public/js'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', 
    {
        title: 'Snake Game',
    }
    )
})

app.listen(process.env.PORT || port, () => console.log(`availibe at http://localhost:${port}`))