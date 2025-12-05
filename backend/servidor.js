const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tareasRoutes = require('./rutas/tareas');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/tareas', tareasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
