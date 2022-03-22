const Tarea = require('./tarea');
/** 
 * _listado:
 * {'uuid-12345-12346-2:{id:12,desc:asg,completadoEn:3456}},
 * {'uuid-12345-12346-2:{id:12,desc:asg,completadoEn:3456}},
 * {'uuid-12345-12346-2:{id:12,desc:asg,completadoEn:3456}},
*/

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;