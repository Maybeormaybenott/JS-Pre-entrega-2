function solicitarNombreyApellido() {
  let nombre = prompt("Ingrese su nombre y apellido");
  console.log(`El nombre del usuario es ${nombre}`);


}

function solicitarEdad() {
  let edad;
  do {
    edad = prompt("Ingrese su edad");
    if (edad >= 18) {
      console.log("Podes comprar tranquilamente");
      alert("Felicitaciones, continúa con el proceso de compra.");
    } else {
      console.log(`Tu edad es ${edad}, no podés comprar.`);
    }
  } while (isNaN(edad) || edad < 18);
}

let precioReloj = 25;
let precioMochila = 20;
let precioCinta = 7;
let precioAnillo = 15;

function calcularPrecioTotal(cantidad, precioUnidad) {
  return cantidad * precioUnidad;
}

function comprarProductos() {
  let opcionesProductos = prompt(
    "¿Qué te gustaría comprar?:  Nº1. Reloj Nº2. Mochila  Nº3. Cinta  Nº4. Anillo"
  );

  if (opcionesProductos === null) {
    alert("Compra cancelada.");
    return;
  }

  switch (opcionesProductos) {
    case "1":
      let cantidadReloj = prompt(
        `Seleccionaste comprar un Reloj, su precio es de: $${precioReloj}. ¿Cuántos relojes querés comprar?`
      );

      let precioTotalReloj = calcularPrecioTotal(cantidadReloj, precioReloj);
      alert(
        `¡Felicidades!, por comprar ${cantidadReloj} relojes te llevás un llavero gratis. El precio total de tu compra es de: $${precioTotalReloj}`
      );
      break;
    case "2":
      let cantidadMochila = prompt(
        `Seleccionaste comprar una Mochila, su precio es de: $${precioMochila}. ¿Cuántas mochilas querés comprar?`
      );
      let precioTotalMochila = calcularPrecioTotal(
        cantidadMochila,
        precioMochila
      );
      alert(
        `¡Felicidades!, por comprar ${cantidadMochila} mochilas te llevás un e-Book gratis. El precio total de tu compra es de: $${precioTotalMochila}`
      );
      break;
    case "3":
      let cantidadCinta = prompt(
        `Seleccionaste comprar una Cinta, su precio es de: $${precioCinta}. ¿Cuántas cintas querés comprar?`
      );
      let precioTotalCinta = calcularPrecioTotal(cantidadCinta, precioCinta);
      alert(
        `¡Felicidades!, por comprar ${cantidadCinta} cintas te llevás una coca-cola gratis. El precio total de tu compra es de: $${precioTotalCinta}`
      );
      break;
    case "4":
      let cantidadAnillo = prompt(
        `Seleccionaste comprar un Anillo, su precio es de: $${precioAnillo}. ¿Cuántos anillos querés comprar?`
      );
      let precioTotalAnillo = calcularPrecioTotal(cantidadAnillo, precioAnillo);
      alert(
        `¡Felicidades!, por comprar ${cantidadAnillo} anillos te llevás otro gratis. El precio total de tu compra es de: $${precioTotalAnillo}`
      );
      break;
    default:
      alert("Opción no válida");
  }
}

solicitarNombreyApellido();
solicitarEdad();
comprarProductos();
calcularPrecioTotal();