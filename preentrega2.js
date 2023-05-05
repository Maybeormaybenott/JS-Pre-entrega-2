// PRE - ENTREGA 1

// function solicitarNombreyApellido() {
//   let nombre = prompt("Ingrese su nombre y apellido");
//   console.log(`El nombre del usuario es ${nombre}`);
// }

// function solicitarEdad() {
//   let edad;
//   do {
//     edad = prompt("Ingrese su edad");
//     if (edad >= 18) {
//       console.log("Podes comprar tranquilamente");
//       alert("Felicitaciones, continúa con el proceso de compra.");
//     } else {
//       console.log(`Tu edad es ${edad}, no podés comprar.`);
//     }
//   } while (isNaN(edad) || edad < 18);
// }

// function calcularPrecioTotal(cantidad, precioUnidad) {
//   return cantidad * precioUnidad;
// }

// function comprarProductos() {
//   let opcionesProductos = prompt(
//     "¿Qué te gustaría comprar?:  Nº1. Relojes Nº2. Mochilas  Nº3. Bolsos  Nº4. Cartucheras"
//   );

//   if (opcionesProductos === null) {
//     alert("Compra cancelada.");
//     return;
//   }

//   switch (opcionesProductos) {
//     case "1":
//       let cantidadReloj = prompt(
//         `Seleccionaste comprar un Reloj, su precio es de: $${precioReloj}. ¿Cuántos relojes querés comprar?`
//       );
//       switch (opcionesProductos) {
//         case "1":
//           let cualReloj = prompt(
//             `Elegiste el reloj enchapado en oro 18 kilates`
//           );
//       }

//       let precioTotalReloj = calcularPrecioTotal(cantidadReloj, precioReloj);
//       alert(
//         `¡Felicidades!, por comprar ${cantidadReloj} relojes te llevás un llavero gratis. El precio total de tu compra es de: $${precioTotalReloj}`
//       );
//       break;
//     case "2":
//       let cantidadMochila = prompt(
//         `Seleccionaste comprar una Mochila, su precio es de: $${precioMochila}. ¿Cuántas mochilas querés comprar?`
//       );
//       let precioTotalMochila = calcularPrecioTotal(
//         cantidadMochila,
//         precioMochila
//       );
//       alert(
//         `¡Felicidades!, por comprar ${cantidadMochila} mochilas te llevás un e-Book gratis. El precio total de tu compra es de: $${precioTotalMochila}`
//       );
//       break;
//     case "3":
//       let cantidadCinta = prompt(
//         `Seleccionaste comprar una Cinta, su precio es de: $${precioCinta}. ¿Cuántas cintas querés comprar?`
//       );
//       let precioTotalCinta = calcularPrecioTotal(cantidadCinta, precioCinta);
//       alert(
//         `¡Felicidades!, por comprar ${cantidadCinta} cintas te llevás una coca-cola gratis. El precio total de tu compra es de: $${precioTotalCinta}`
//       );
//       break;
//     case "4":
//       let cantidadAnillo = prompt(
//         `Seleccionaste comprar un Anillo, su precio es de: $${precioAnillo}. ¿Cuántos anillos querés comprar?`
//       );
//       let precioTotalAnillo = calcularPrecioTotal(cantidadAnillo, precioAnillo);
//       alert(
//         `¡Felicidades!, por comprar ${cantidadAnillo} anillos te llevás otro gratis. El precio total de tu compra es de: $${precioTotalAnillo}`
//       );
//       break;
//     default:
//       alert("Opción no válida");
//   }
// }

// solicitarNombreyApellido();
// solicitarEdad();
// comprarProductos();
// calcularPrecioTotal();

// PRE - ENTREGA 2

const reloj1 = {
  nombre: "Reloj enchapado en oro 18 kilates",
  tipo: "Enchapado",
  material: "Oro",
  malla: "Metal bañado",
  genero: "Unisex",
  precio: 35,
};

const reloj2 = {
  nombre: "Reloj discreto oro",
  tipo: "Discreto",
  material: "Oro 18k",
  malla: "Metal bañado",
  genero: "Unisex",
  precio: 30,
};

const reloj3 = {
  nombre: "Reloj formal malla eco-cuero",
  tipo: "Discreto",
  material: "Acero inoxidable",
  malla: "Eco-cuero",
  genero: "Unisex",
  precio: 20,
};

const anillo1 = {
  nombre: "Anillo en acero inox",
  tipo: "Discreto",
  material: "Acero inoxidable",
  genero: "Unisex",
  precio: 20,
};

const anillo2 = {
  nombre: "Anillo GD-3",
  tipo: "Elegante",
  material: "Acero inoxidable",
  genero: "Unisex",
  precio: 27,
};

const mochila1 = {
  nombre: "Mochila práctica unisex",
  tipo: "Práctica y anti-robo",
  material: "Lona impermeable",
  genero: "Unisex",
  precio: 35,
};

const mochila2 = {
  nombre: "Mochila de cuero",
  tipo: "Práctica y cómoda",
  material: "Eco-cuero",
  genero: "Unisex",
  precio: 40,
};

const bolso1 = {
  nombre: "Bolso de mano",
  tipo: "Elegante",
  material: "Algodón orgánico",
  genero: "Unisex",
  precio: 25,
};

const cartuchera1 = {
  nombre: "Cartuchera vichy",
  tipo: "Elegante",
  material: "Eco-cuero",
  genero: "Unisex",
  precio: 25,
};

let relojes = [reloj1, reloj2, reloj3];
let anillos = [anillo1, anillo2];
let mochilas = [mochila1, mochila2];
let cartucheras = [cartuchera1];
let bolsos = [bolso1];

function calcularTotal(cantidad, precioUnidad) {
  return cantidad * precioUnidad;
}

function solicitarProducto() {
  let productos = prompt(
    "En nuestro sitio contamos con los siguientes productos \n Nº1 Relojes \n Nº2 Mochilas \n Nº3 Anillos \n Nº4 Bolsos \n Nº5 Cartucheras"
  );

  switch (productos) {
    case "1":
    case "Relojes":
      console.log("Elegiste Relojes, estas son nuestras opciones:");
      relojes.forEach(function (elemento, indice) {
        console.log(
          `${indice + 1}. ${elemento.nombre} - Precio: ${elemento.precio}`
        );
      });
      let opcionReloj = prompt(
        "Ingrese el número correspondiente al reloj deseado:"
      );
      switch (opcionReloj) {
        case "1":
          let cantidadReloj1 = prompt("Ingrese la cantidad que desea comprar:");
          console.log(`Elegiste ${cantidadReloj1} ${relojes[0].nombre}, precio unidad: ${relojes[0].precio}, material: ${relojes[0].material} monto total: ${cantidadReloj1 * relojes[0].precio}`);
          alert(`El precio total es: `+ calcularTotal(cantidadReloj1, relojes[0].precio));
          break;
        case "2":
          let cantidadReloj2 = prompt("Ingrese la cantidad que desea comprar:");
          console.log(`Elegiste ${cantidadReloj2} ${relojes[1].nombre}, precio unidad: ${relojes[1].precio}, material: ${relojes[1].material} monto total: ${cantidadReloj2 * relojes[1].precio}`);
          alert(`El precio total es: `+ calcularTotal(cantidadReloj2, relojes[1].precio));
          break;
        case "3":
          let cantidadReloj3 = prompt("Ingrese la cantidad que desea comprar:");
          console.log(`Elegiste ${cantidadReloj3} ${relojes[2].nombre}, precio unidad: ${relojes[2].precio}, material: ${relojes[2].material} monto total: ${cantidadReloj3 * relojes[2].precio}`);
          alert(`El precio total es: `+ calcularTotal(cantidadReloj3, relojes[2].precio));
          break;
        default:
          console.log("Ups! por ahora no tenemos esa que estás buscando...");
          break;
      }
      break;
    case "2":
    case "Mochilas":
      console.log("Elegiste Mochilas, éstas son nuestras opciones:");
      mochilas.forEach(function (elemento, indice) {
        console.log(
          `${indice + 1}. ${elemento.nombre} - Precio: ${elemento.precio}`
        );
      });
      let opcionMochilas = prompt(
        "Ingresá el número correspondiente a la mochila deseada:"
      );
      switch (opcionMochilas) {
        case "1":
          let cantidadMochila1 = prompt("Ingrese la cantidad que desea comprar:");
          console.log(`Elegiste ${cantidadMochila1} ${mochilas[0].nombre}, precio unidad: ${mochilas[0].precio}, material: ${mochilas[0].material} monto total: ${cantidadMochila1 * mochilas[0].precio}`);
          alert(`El precio total es: `+ calcularTotal(cantidadMochila1, mochilas[0].precio));
          break;
        case "2":
          let cantidadMochila2 = prompt("Ingrese la cantidad que desea comprar:");
          console.log(`Elegiste ${cantidadMochila2} ${mochilas[1].nombre}, precio unidad: ${mochilas[1].precio}, material: ${mochilas[1].material} monto total: ${cantidadMochila2 * mochilas[1].precio}`);
          alert(`El precio total es: `+ calcularTotal(cantidadMochila2, mochilas[1].precio));
          break;
        default:
          console.log("Ups!, por ahora no tenemos esa que estás buscando...");
          break;
      }
      break;
    case "3":
    case "Anillos":
      console.log("Elegiste Anillos, éstas son nuestras opciones:");
      anillos.forEach(function (elemento, indice) {
        console.log(
          `${indice + 1}. ${elemento.nombre} - Precio: ${elemento.precio}`
        );
      });
      let opcionAnillos = prompt(
        "Ingresá el número correspondiente al anillo deseado:"
      );
      switch (opcionAnillos) {
        case "1":
          let cantidadAnillo1 = prompt("Ingrese la cantidad que desea comprar:");
          console.log(`Elegiste ${cantidadAnillo1} ${anillos[0].nombre}, precio unidad: ${anillos[0].precio}, material: ${anillos[0].material} monto total: ${cantidadAnillo1 * anillos[0].precio}`);
          alert(`El precio total es: `+ calcularTotal(cantidadAnillo1, anillos[0].precio));
          break;
        case "2":
          let cantidadAnillo2 = prompt("Ingrese la cantidad que desea comprar:");
          console.log(`Elegiste ${cantidadAnillo2} ${anillos[1].nombre}, precio unidad: ${anillos[1].precio}, material: ${anillos[1].material} monto total: ${cantidadAnillo2 * anillos[1].precio}`);
          alert(`El precio total es: `+ calcularTotal(cantidadAnillo2, anillos[1].precio));
          break;
        default:
          console.log("Ups! por ahora no tenemos esa que estás buscando...");
          break;
      }
      break;
    case "4":
    case "Bolsos":
      console.log("Elegiste Bolsos, estas son nuestras opciones:");
      bolsos.forEach(function (elemento, indice) {
        console.log(
          `${indice + 1}. ${elemento.nombre} - Precio: ${elemento.precio}`
        );
      });
      let opcionBolsos = prompt(
        "Ingresá el número correspondiente al bolso deseado:"
      );
      switch (opcionBolsos) {
        case "1":
          let cantidadBolso1 = prompt("Ingrese la cantidad que desea comprar:");
          console.log(`Elegiste ${cantidadBolso1} ${bolsos[0].nombre}, precio unidad: ${bolsos[0].precio}, material: ${bolsos[0].material} monto total: ${cantidadBolso1 * bolsos[0].precio}`);
          alert(`El precio total es: `+ calcularTotal(cantidadBolso1, bolsos[0].precio));
          break;
        default:
          console.log("Ups! por ahora no tenemos esa que estás buscando...");
          break;
        }
        break;
        case "5":
        case "Cartucheras":
          console.log("Elegiste Cartucheras, estas son nuestras opciones:");
          cartucheras.forEach(function (elemento, indice) {
            console.log(
              `${indice + 1}. ${elemento.nombre} - Precio: ${elemento.precio}`
            );
          });
          let opcionCartuchera = prompt(
            "Ingresá el número correspondiente a la cartuchera deseada:"
          );
          switch (opcionCartuchera) {
            case "1":
              let cantidadCartuchera1 = prompt("Ingrese la cantidad que desea comprar:");
              console.log(`Elegiste ${cantidadCartuchera1} ${cartucheras[0].nombre}, precio unidad: ${cartucheras[0].precio}, material: ${cartucheras[0].material} monto total: ${cantidadCartuchera1 * cartucheras[0].precio}`);
              alert(`El precio total es: `+ calcularTotal(cantidadCartuchera1, cartucheras[0].precio));
              break;

            default:
              console.log(
                "Ups! por ahora no tenemos esa que estás buscando..."
              );

              break;
          }
          break;
      }
  }
solicitarProducto();
