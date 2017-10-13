/*document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }
});
*/
const elementoFormulario = document.querySelector ('form');

const Nombre =
document.querySelector('input[name="Nombre"]');
const Apellido =
document.querySelector('input[name="Apellido"]');
const Email =
document.querySelector('input[name="Email"]');
const Coment =
document.querySelector('input[name="Coment"]');

function onsubmit(){
	let valido = true;
	if(!Nombre.value){
		valido = false;
	}
	if (!Apellido.value){
		valido = false;
	}
	if (!Coment.value){
		valido = false;
	}
	console.log(valido)

	return valido;
}