let tareas = [];

module.exports = {
  obtenerTareas: () => tareas,
  agregarTarea: (tarea) => tareas.push(tarea),
  eliminarTarea: (id) => {
    tareas = tareas.filter(t => t.id !== id);
  }
};
