/*var sumar = num1 => num1 + 10

console.log(sumar(2))*/


var usuario = {
    nombre : "Jhonatan",
    apellido : "Plata",
    saludar : function(){
        setTimeout(()=> alert("Buenos dias " + this.nombre + this.apellido) ,2000)
    }
}