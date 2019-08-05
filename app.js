const axios = require('axios');
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log)*/
/*
clima.getClima(3.03, -75.16)
    .then(console.log)
    .catch(console.log)*/

const getInfo = async(dir) => {
    const dataCiudad = await lugar.getLugarLatLng(dir);
    if (dataCiudad === 0) {
        throw new Error(`No se pudo determinar el clima de ${dir}`)
    } else {
        const temperatura = await clima.getClima(dataCiudad.lat, dataCiudad.lng)
        return `El clima de ${dir} es de ${temperatura}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)