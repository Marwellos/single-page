/* https://panel.dejvishost.eu/server/e4933305/ */
/*https://cardetailing-on.dejvishost.eu/*/
//LIVE PODPORA 24/7 VZBUDIT V NOCI NENÍ PROBLEM

const express = require('express'); // Import frameworku Express
const app = express(); // Vytvoření instance aplikace Express
const port = 3001; // Port, na kterém server běží

const path = require('path'); // Import knihovny path pro práci s cestami k souborům
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

//git add -A
//git commit -m "co jsem udělal"
//git push -u origin main

//git pull origin main
//# Vyřešte případné konflikty a proveďte commit
//git push

//udelat doma: https://www.youtube.com/watch?v=eUMqJMkwOBY&ab_channel=CodingLab
//https://github.com/rutikwankhade/Bucket


//https://www.youtube.com/watch?v=fX4-YiXxTn0
//importovat ve škole svoji databázi kterou mám nahranou v db-export



//https://panel.dejvishost.eu/server/e4933305/
//animated tlačítka
//https://www.youtube.com/watch?v=PgAZ8KzfhO8&ab_channel=GreatStack
