const argv = require("yargs").options({
        direction: {
            alias: "d",
            demand: true,
            description: "Ingresar la direccion"

        }
    },

).help().argv;

module.exports = {
    argv
}