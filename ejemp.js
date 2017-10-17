class Persona {
constructor(nombre) {
this.nombre = nombre;
}
saludar() {
alert(‘Hola, soy ‘ + this.nombre);
}
}
let juan = new Persona(‘juan’);
console.log(juan.nombre); // juan
juan.saludar(); // alert(‘Hola, soy juan’)