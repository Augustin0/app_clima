const { getLocation } = require("./requestLocations")
const { print } = require("../utils")
const { default: axios } = require("axios")


const geolocation = async(pais) => {
    return { lon, lat } = await getLocation(pais).then(data => {
        return { lat: data.Latitud, lon: data.Longitud }
    }).catch((err) => {
        print(err)
        return false
    })

}

const requestClima = (payload) => {
    if (payload) {
        let lat = payload.lat;
        let lon = payload.lon,
            OPEN_WEATHER_MAP = "e3868ee8951765bacfd32f584a2f4f18",
            URL_WEATHER_MAP = "http://api.openweathermap.org/data/2.5/weather?";

        return axios.get(encodeURI(`${URL_WEATHER_MAP}lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_MAP}`)).then(data => {
            return data.data.main.temp
        }).catch(err => {
            return "No es tas conectado o tu conexion a internet es lenta"
        })
    }
}

const getClima = async(pais) => {

    let location = await geolocation(pais).then(data => {
        return data
    }).catch(err => {
        print(err)
        return false
    });
    if (location)
        return await requestClima(location)

}

module.exports = {
    getClima
}