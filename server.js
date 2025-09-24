'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt');
const app         = express();
const cors = require('cors');
app.use(cors());
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
  console.log('Hash asíncrono:', hash);

  // Comparar con la contraseña correcta
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log('Resultado comparación asíncrona (correcta):', res); // Debería mostrar "true"
  });

  // Comparar con una contraseña incorrecta
  bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
    console.log('Resultado comparación asíncrona (incorrecta):', res); // Debería mostrar "false"
  });
});

//END_ASYNC

//START_SYNC

// Hash síncrono
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Hash síncrono:', hash);

// Comparación síncrona
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('Resultado comparación síncrona (correcta):', result);

// Comparación síncrona con contraseña incorrecta
var result2 = bcrypt.compareSync(someOtherPlaintextPassword, hash);
console.log('Resultado comparación síncrona (incorrecta):', result2);

//END_SYNC

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log("Listening on port:", PORT)
});