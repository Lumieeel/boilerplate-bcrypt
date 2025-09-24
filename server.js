'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt'); 
const app         = express();
const cors        = require('cors'); 

app.use(cors()); 
fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Hash generado:", hash);

  // Comparar con la contraseña correcta
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log("¿Coincide contraseña correcta?", res); // true
  });

  // Comparar con una contraseña incorrecta
  bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
    console.log("¿Coincide otra contraseña?", res); // false
  });
});
//END_ASYNC


//START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("HashSync generado:", hash);

const res1 = bcrypt.compareSync(myPlaintextPassword, hash);
console.log("¿Sync contraseña correcta?", res1); // true

const res2 = bcrypt.compareSync(someOtherPlaintextPassword, hash);
console.log("¿Sync otra contraseña?", res2); // false
//END_SYNC


// ✅ Solo una definición de PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log("Listening on port:", PORT);
});























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
