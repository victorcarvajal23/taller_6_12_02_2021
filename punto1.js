// 1.	Programa que lea un valor de precio base y calcule su impuesto,
//  si es valor es mayor de 150.000 se le aplicará un 19% de impuestos,
//   en caso contrario se le aplicará un 16%.
//new Intl.NumberFormat("de-DE",{ style: 'currency', currency: 'COU' }).format(number));
const number = new Intl.NumberFormat("de-DE",{ style: 'currency', currency: 'COP' });
let valor= parseInt(prompt("ingrese el valor"));
let valida= Number.isInteger(valor)?valor:alert("error en el valor");
let im
if (valor>150000) {
    resultado=(valor*19)/100;
    im=19;
}
else{
    resultado=(valor*16)/100;
    im=16;
}
console.log(`precio base ${number.format(valor)}`)
console.log(`impuesto de ${im}% es ${number.format(resultado)}`)

