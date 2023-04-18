function solicitarNombreyApellido() {
  let nombre = prompt("Ingrese su nombre y apellido");
  console.log(`El nombre del usuario es ${nombre}`);
}
solicitarNombreyApellido();

function solicitarEdad() {
  let edad = prompt("Ingrese su edad");
  if (edad >= 18) {
    console.log("Podes comprar tranquilamente");
    alert("Felicitaciones, continúa con el proceso de compra");
  } else if (edad < 18 || edad !== Number) {
    console.log(`Tu edad es ${edad}, no podés comprar.`);
  }
}
solicitarEdad();
