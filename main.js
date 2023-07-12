
function determinarGeneracion() {
    let nombre, apellido, fechaNacimiento
    let valido = false

    do {
        nombre = prompt("Ingresa tu nombre:")
        apellido = prompt("Ingresa tu apellido:")
        fechaNacimiento = parseInt(prompt("Ingresa tu fecha de nacimiento (YYYY-MM-DD):"))

        if (nombre === null || nombre === "" || apellido === null || apellido === "" || fechaNacimiento === null || fechaNacimiento === "") {
            alert("Debes completar todos los campos.")
        } else {
            valido = true
        }
    } while (!valido)
    

    if ( fechaNacimiento < 1946 || fechaNacimiento >= 2024) {
        alert("El año de nacimiento ingresado no es válido.")
        return
    }

    let generacion
    if (fechaNacimiento >= 1946 && fechaNacimiento <= 1964) {
        generacion = "Baby Boomers"
    } else if (fechaNacimiento >= 1965 && fechaNacimiento <= 1980) {
        generacion = "Generación X"
    } else if (fechaNacimiento >= 1981 && fechaNacimiento <= 1996) {
        generacion = "Millennials"
    } else if (fechaNacimiento >= 1997 && fechaNacimiento <= 2012) {
        generacion = "Generación Z"
    } else if (fechaNacimiento >= 2013 && fechaNacimiento <= 2023) {
        generacion = "Generación Alfa"
    } else {
        generacion = "No se pudo determinar la generación."
    }

    alert("¡Hola " + nombre + " " + apellido + "! Usted perteneces a la " + generacion)
}

determinarGeneracion()
