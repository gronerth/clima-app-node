const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3b4c24c20f4b13d7b5399cf09a647f60&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}