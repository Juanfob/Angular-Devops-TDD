var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(_nombre, _apellido, _fechaNacimiento, _genero) {
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.fechaNacimiento = _fechaNacimiento;
        this.genero = _genero;
    }
    Persona.prototype.edad = function () {
        var edad;
        edad = new Date().getFullYear() - this.fechaNacimiento.getFullYear();
        return edad;
    };
    return Persona;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(_nombre, _apellido, _fecNac, _genero, _id) {
        var _this = _super.call(this, _nombre, _apellido, _fecNac, _genero) || this;
        _this.materias = [];
        _this.notas = [];
        return _this;
    }
    Estudiante.prototype.agregarNota = function (nota) {
        this.notas.push(nota);
    };
    Estudiante.prototype.agregarMateria = function (materia) {
        this.materias.push(materia);
    };
    Estudiante.prototype.obtenerNotas = function () {
        return this.notas;
    };
    return Estudiante;
}(Persona));
var estudiante = new Estudiante("Jhonatan", "Plata", new Date("05-04-1990"), true, 123456);
var persona = new Persona("Pedro", "Perez", new Date(), true);
console.log(estudiante);
console.log(persona);
