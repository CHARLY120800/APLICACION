const express = require('express');
const router = express.Router();
const db = require('../baseDatos');

router.get('/', (req, res) => {
  res.json(db.obtenerTareas());
});

router.post('/', (req, res) => {
  const tarea = { id: Date.now(), ...req.body };
  db.agregarTarea(tarea);
  res.json({ mensaje: 'Tarea agregada', tarea });
});

router.delete('/:id', (req, res) => {
  db.eliminarTarea(Number(req.params.id));
  res.json({ mensaje: 'Tarea eliminada' });
});

module.exports = router;
