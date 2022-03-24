require('colors');
const Tarea = require('./tarea');
/**
 * _listado:
 * {'uuid-12345-12346-2:{id:12,desc:asg,completadoEn:3456}},
 * {'uuid-12345-12346-2:{id:12,desc:asg,completadoEn:3456}},
 * {'uuid-12345-12346-2:{id:12,desc:asg,completadoEn:3456}},
 */

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea;
    })
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((tarea, index) => {
      const idx = `${index + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;
      console.log(`${idx} ${desc} :: ${estado}`);

      // const tareaFormateada = tarea.completadoEn ? `${(index + 1)} ${tarea.desc} :: ${'Completada'.green}` : `${(index + 1)} ${tarea.desc} ${'Pendiente'.red}`;
      // console.log(tareaFormateada);
    })
  }

  listadoPendientesCompletadas(completadas = true) {

  }
}

module.exports = Tareas;
