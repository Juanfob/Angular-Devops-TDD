interface IPersona{
    nombre :string,
    apellido: string,
    edad: number
}

var personas : IPersona [] = []

var persona1 : IPersona = {
    nombre:"Jhonatan",
    apellido: "Plata",
    edad : 28
}

var persona2 : IPersona = {
    nombre:"Carolaine",
    apellido: "Rada",
    edad : 24
}

personas.push(persona1)
personas.push(persona2)

console.log(persona1.nombre)