const axios = require('axios');

const getclima = async(ciudad) => {
    const ciudadURL = encodeURI(ciudad);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL}
                                    &appid=b0829936cb92fa5027897dee1006e8c1&units=metric`);

    const data = resp.data.main;
    const tem = data.temp
    const hum = data.humidity
    const pres = data.pressure
    return {
        tem,
        hum,
        pres
    }
}

module.exports = {
    getclima
}