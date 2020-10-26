class Persona {

    nombre: string
    apellido: string
    fechaNacimiento: Date
    genero : boolean

    constructor(_nombre:string, _apellido:string,
                _fechaNacimiento:Date, _genero:boolean){
                    
        this.nombre = _nombre
        this.apellido = _apellido
        this.fechaNacimiento = _fechaNacimiento
        this.genero = _genero
    }

    edad(){
        let edad : number
        edad = new Date().getFullYear() - this.fechaNacimiento.getFullYear()
        return edad
    }
}

class Estudiante extends Persona{
    identificacion: number
    materias : string [] = []
    notas : number[] = []
    constructor(_nombre:string, _apellido:string, 
        _fecNac:Date, _genero:boolean, _id : number){

        super(_nombre, _apellido, _fecNac, _genero)
    }

    agregarNota(nota:number){
        this.notas.push(nota)
    }

    agregarMateria(materia:string){
        this.materias.push(materia)
    }

    obtenerNotas(){
        return this.notas
    }
}

var estudiante :Estudiante = new Estudiante("Jhonatan", 
                                    "Plata",
                                    new Date("05-04-1990"),
                                    true, 123456)
var persona : Persona = new Persona("Pedro",  "Perez", new Date(), true)

console.log(estudiante)
console.log(persona)