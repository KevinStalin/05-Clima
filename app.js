const clima = require('./controlador/clima')

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
    /*
    opcion:{
        alias: 'o',
        desc: 'opcion para la humedad y presion',
    }
    */

}).argv

let opcion = argv._[0];

const getInformacion = async(ciudad, opcion) => {
    try {
        const temp = await clima.getclima(ciudad);
        if (opcion == 'H') {
            return `El clima de ${ciudad} es de: ${temp.tem} con una humedad de: ${temp.hum}`;
        }
        if (opcion == 'P') {
            return `El clima de ${ciudad} es de: ${temp.tem} con una presion de: ${temp.pres}`;
        } else {
            return `El clima de ${ciudad} es de: ${temp.tem}`;
        }
    } catch (error) {
        return `No se pudo obtener el clima de ${ciudad}`
    }
}
getInformacion(argv.ciudad, opcion)
    .then(console.log)
    .catch(console.log)