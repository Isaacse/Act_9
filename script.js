function res(){
  var respuesta = document.getElementById('respuesta');
  var resultado = document.getElementById('resultado');
  if(respuesta.value === "4A")
    resultado.innerHTML = "correcto"
  else 
    resultado.innerHTML = "No es correcto"
}