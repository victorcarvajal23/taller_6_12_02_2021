// 6.	Determina si un carácter de entrada es una letra minúscula, 
// una letra mayúscula o un número. Si estas tres condiciones son false,
//  el carácter no es un carácter alfanumérico. En el ejemplo se muestra 
//  un mensaje para cada caso.

const obj={
    entrada:prompt("ingrese un caracter"),
caracter:function() {
    let exp=new RegExp("[A-Z]","")
    let exp2=new RegExp("[a-z]","")
    let items =this.entrada.length
    if (items==0)return ("campo vacio");
    if (items>1)return ("excede el maximo de caracteres");
    if (!(isNaN(this.entrada))) return ("el caracter es un numero");
    if (exp.test(this.entrada))return ("el caracter es una letra Mayuscula");
    if (exp2.test(this.entrada))return ("el caracter es una letra Minuscula");


    return "No es un caracter alfanumerico"
}
}
console.log(obj.caracter())
// console.log(ingresa)
