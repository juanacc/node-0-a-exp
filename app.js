require('colors');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {
    //console.log('probando');
    let opt = '';

    do {
        //opt = await mostrarMenu();
        opt = await inquirerMenu();
        console.log({ opt });
        //const tareas = new Tareas();
        //const tarea = new Tarea('Comprar comida');
        //console.log(tarea);
        //tareas._listado[tarea.id] = tarea;
        //console.log(tareas);

        await pausa();

        // if (opt !== '0') {
        //     await pausa();
        // }

    } while (opt !== '0');

    //pausa();
}

main();