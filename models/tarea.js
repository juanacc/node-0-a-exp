const { v4: uuidv4 } = require('uuid');//mediante desestructuracion obtengo v4 y lo renombro a uuidv4

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;//podria omitirlo debido a que ya esta inicializado en null en la definicion de la propiedad
    }
}

module.exports = Tarea;