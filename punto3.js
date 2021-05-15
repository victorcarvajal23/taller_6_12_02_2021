// 3.	Programa para solicitar el nombre, y la nota 
// promedio de 5 estudiantes de un curso de computación.

// let objeto={}
// objeto.nombre=prompt("ingrese nombre");
// objeto.nota=prompt("ingrese nota")
// console.log(objeto);


let obje={lista:[]}
for (let i = 0; i<5; i++) {
    obje.lista.push({
        alumno:prompt("ingrese nombre del alumno"),
        nota:prompt("ingrese la nota")
    })
    
}
console.log(obje)

