/* https://panel.dejvishost.eu/server/e4933305/ */
/*https://cardetailing-on.dejvishost.eu/*/
//LIVE PODPORA 24/7 VZBUDIT V NOCI NENÍ PROBLEM

const express = require('express'); // Import frameworku Express
const app = express(); // Vytvoření instance aplikace Express
const port = 3100; // Port, na kterém server běží
var favicon = require('serve-favicon');


const path = require('path'); // Import knihovny path pro práci s cestami k souborům
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));// Middleware načte ikonu (favicon) ze složky "public" a souboru "logo.ico" a nastaví ji jako ikonu pro webovou stránku.
app.set('view engine', 'ejs');
app.use(express.static('public'));

const ejs = require('ejs'); // Import šablony EJS pro renderování HTML
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Importuj modul mysql2
const mysql = require('mysql2');

// Vytvoř připojení k MySQL databázi
const db = mysql.createConnection({
  host: 'db.ffm1.dejvishost.eu', // Název nebo IP adresa serveru MySQL
  user: 'u54_YGX01AoTR4', // Uživatelské jméno pro přihlášení k databázi
  password: 'jYgUf^RJ^Exv14o4.rs.2P.2', // Heslo pro přihlášení k databázi
  database: 's54_my_database', // Název databáze
});
// Připojení k databázi
db.connect((err) => {
  if (err) {
    console.error('Chyba při připojování k databázi: ' + err.message);
  } else {
    console.log('Připojení k databázi bylo úspěšné');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/formular', (req, res) => {
  res.render('formular');
});

app.post('/odeslat', (req, res) => {
  const { name, email, phone, otherMedia, radioResult } = req.body;

  // Zde můžeš provést SQL dotaz pro vložení dat do databáze
  const sql = 'INSERT INTO kontaktni_formular (jmeno_prijmeni, email, telefon, co_s_autem, zpusob_kontaktu) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, otherMedia, radioResult], (err, result) => {
    if (err) {
      console.error('Chyba při vkládání dat do databáze: ' + err.message);
      res.redirect('/chyba'); // Pokud dojde k chybě, můžeš přesměrovat na stránku s chybou
    } else {
      console.log('Data byla úspěšně uložena do databáze');
      res.redirect('/'); // Pokud vše proběhne v pořádku, přesměruj na stránku s úspěšným odesláním formuláře
    }
  });
});


//predelat sekci "cenik" a udelat tam proč si vybrat nas nebo neco na podobný zpusob