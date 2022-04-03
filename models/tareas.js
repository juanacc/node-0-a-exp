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

  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id]; //eliminar la propiedad del objeto
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea;
    });
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
    });
  }

  listadoPendientesCompletadas(completadas = true) {
    console.log();
    let index = 1;
    this.listadoArr.forEach(tarea => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;
      if (completadas) {
        if (completadoEn) {
          const idx = `${index}`.green;
          console.log(`${idx} ${desc} :: ${completadoEn.green}`);
          index++;
        }
      } else {
        if (!completadoEn) {
          const idx = `${index}`.green;
          console.log(`${idx} ${desc} :: ${estado}`);
          index++;
        }
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach(id => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.foreach(tarea => {
      if (!ids.includes(tarea.id)) {
        //const tarea = this._listado[tarea.id];
        //tarea.completadoEn = null;
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
