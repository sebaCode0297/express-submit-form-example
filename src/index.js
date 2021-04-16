const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// depósito de datos temporal
let usuarios = []; // <- se inicia vacío con la aplicación

//rutas o endpoints
app.post('/', (req, res, next) => {
  const usuario = req.body;
  if(!usuario) {
    return res.status(400).json({error: 'No hay datos'});
  }
  // no recuerdo funcion de esta parte del codigo 
  usuario.no = usuarios.length + 1;

  //console.log(usuario);
  usuarios.push(usuario);
  // podemos enviar el array de usuarios, así por cada vez que accedemos a este endpoint vamos viendo los datos almacenados
  return res.status(200).json(usuarios);
});

app.all('/', (req, res) => {
  const nameForm = path.join(__dirname, '/index.html');
  return res.sendFile(nameForm);
});


app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto: ${port}.`);
});
