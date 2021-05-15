// 2.	Calcular el sueldo que le corresponde al trabajador de una empresa
//  que cobra $14.400.000 anual, el programa debe realizar los cálculos 
//  en función de los siguientes criterios:

// •	Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
// •	Si lleva menos de 10 años, pero más que 5 se le aplica un aumento del 7%.
// •	Si lleva menos de 5 años, pero más que 3 se le aplica un aumento del 5%.
// •	Si lleva menos de 3 años se le aplica un aumento del 3%.

// const number = new Intl.NumberFormat("de-DE",{ style: 'currency', currency: 'COP' });
// const sueldo=14400000;
// let años,porcentaje;
// while (true) {
//     años=parseInt(prompt("ingrese los años laborados"))
//     let valida=Number.isInteger(años)
//     if (valida==true) {
//         break  
//     }
//     else{
//         alert("ingrese un valor valido")
//         continue
//     }
// }
// if (años>10) {
//     porcentaje=10;
// }
// else if (años>5) {
//     porcentaje=7;
// }
// else if (años>3) {
//     porcentaje=5;
// } 
// else{
//     porcentaje=3;
// }
// //p1 sueldo p2 porcentaje
// function aumento(p1,p2){
//     let total=(p1*p2)/100;
//     let final=total+p1;
//     console.log(`el aumento es de ${porcentaje}% = ${number.format(total)} para un total de ${number.format(final)} anual`)
// }
// aumento(sueldo,porcentaje);
// console.log("años "+años);


//segunda forma


const datos= {
    sueldo:14400000,
    tiempo:prompt("ingrese el numero de años trabajados"),
    nuevo:[{
            años:10,
            porc:10
        },
        {
            años:5,
            porc:7
        },
        {
            años:3,
            porc:5
        },
        {
            años:0,
            porc:3
        }
        ],
        aumento: function(){
            let tiempo=this.tiempo;
            let i=0;
            while (!(tiempo>=this.nuevo[i].años)) {
                i++;
            }
            let sube=((this.nuevo[i].porc)*(this.sueldo))/100;
            return `el aumento sera de ${sube} para un total anual de ${sube+this.sueldo}`
        }
    }
    let nn= Object.create(datos);
    console.log(nn.aumento());