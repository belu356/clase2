var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Perro = /** @class */ (function () {
    function Perro(nombre) {
        this.nombre = nombre;
    }
    Perro.prototype.ladrar = function () {
        return 'Guau!';
    };
    return Perro;
}());
var juan = new Persona("Juan");
juan.apllido = 'Perez';
var Beagle = /** @class */ (function (_super) {
    __extends(Beagle, _super);
    function Beagle(nombre, raza) {
        var _this = _super.call(this, nombre) || this;
        _this.raza = raza;
        return _this;
    }
    Beagle.prototype.saludar = function () {
        return this.ladrar();
    };
    return Beagle;
}(Perro));
var quinn = new Beagle('Quinn');
