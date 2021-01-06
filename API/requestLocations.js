const data = require("./geolocation");
module.exports.getLocation = (pais) => {
    return new Promise((resolve, reject) => {
        let found = false
        data.forEach(country => {

            if (country.pais == pais) {
                found = true

                resolve(country.gelocation)
            }
        })

        if (!found) {
            reject(`No se ha agregado ${pais} en la api`)
        }

    })
}