require('colors');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {
  //console.log('probando');
  let opt = '';
  const tareas = new Tareas();

  do {
    //opt = await mostrarMenu();
    opt = await inquirerMenu();
    console.log({ opt });
    //const tareas = new Tareas();
    //const tarea = new Tarea('Comprar comida');
    //console.log(tarea);
    //tareas._listado[tarea.id] = tarea;
    //console.log(tareas);

    switch (opt) {
      case '1':
        //crear opcion
        const desc = await leerInput('Descripcion:');
        tareas.crearTarea(desc);
        break;
      case '2':
        console.log(tareas.listadoArr);
        break;
    }

    await pausa();

    // if (opt !== '0') {
    //     await pausa();
    // }
  } while (opt !== '0');

  //pausa();
};

main();
