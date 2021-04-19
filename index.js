// Completar acá.
// Escribir la función textosCortos y pasar el test.
function textosCortos(titulo, texto) {
  var textosDePrueba = [
    {
      titulo: titulo,
      texto: texto,
    },
  ];
  var tituloATrabajar = textosDePrueba[0].titulo;
  var tituloSinEspacios = tituloATrabajar.replace(/(^\s+|\s+$)/g, ""); //aca iria el .trim() pero no lo reconoce
  console.log(tituloSinEspacios);
  var tituloEnMayuscula =
    tituloSinEspacios.charAt(0).toUpperCase() + tituloSinEspacios.slice(1);
  console.log(tituloEnMayuscula);
  return tituloSinEspacios;
}

// test: no modificar
function testTextosCortos() {
  const textosDePrueba = [
    { titulo: " un titulo ", texto: "uno dos tres cuatro cinco" },
    {
      titulo: "what ever",
      texto: "uno dos tres cuatro cinco seis siete ocho nueve diez once",
    },
  ];
  const respuesta = textosCortos(textosDePrueba);

  if (respuesta.length == 1 && respuesta[0].titulo == "Un titulo") {
    console.log("testTextosCortos passed");
  } else {
    throw "testTextosCortos failed";
  }
}

function main() {
  testTextosCortos();
}

//textosCortos(" un titulo ", "uno dos tres cuatro cinco"); // si le paso este comando funciona bien
main();
