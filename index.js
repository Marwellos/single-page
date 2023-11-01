const express = require('express'); // Import frameworku Express
const app = express(); // Vytvoření instance aplikace Express
const port = 3001; // Port, na kterém server běží

const path = require('path'); // Import knihovny path pro práci s cestami k souborům
app.set('view engine', 'ejs');
app.use(express.static('public'));



const ejs = require('ejs'); // Import šablony EJS pro renderování HTML


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/formular', (req, res) => {
  res.render('formular');
});


//git add -A
//git commit -m "co jsem udělal"
//git push -u origin main


//git pull origin main
//# Vyřešte případné konflikty a proveďte commit
//git push


//udelat doma: https://www.youtube.com/watch?v=eUMqJMkwOBY&ab_channel=CodingLab
//https://github.com/rutikwankhade/Bucket

