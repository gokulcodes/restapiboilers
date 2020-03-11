const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.get('/api/home', (req, res)=> {
    res.render('index.html')
})

app.post('/api/home', async (req, res) => {
    res.send('posted')
})

app.listen(3000, () => {
    console.log('done')
})