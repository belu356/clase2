abstract class Perro {

    public nombre: string;

    constructor(public nombre: string){
    }
    public ladrar() : string {
        return 'Guau!';
    }
}


let juan = new Persona("Juan");

juan.apllido = 'Perez';

class Beagle extends
Perro{
    constructor(nombre: string,
    public raza: string){
        super(nombre);
    }
saludar () : string{
    return this.ladrar();
}

}

let quinn = new Beagle('Quinn');
