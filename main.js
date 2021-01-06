const { argv } = require("./comandLines");
const { print } = require("./utils");


const { getClima } = require("./API/request_clima");
(async() => {
    let pais = argv.direction;
    let clima = await getClima(pais);
    if (clima)
        print(`El Clima actual en ${pais} es ${clima}°C`)

})()