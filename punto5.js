// 5.	El profesor de una materia desea conocer la
//  cantidad de sus alumnos que no tienen derecho al 
//  examen de nivelación. Diseñe el algoritmo que lea 
//  las calificaciones obtenidas en las 5 unidades por 
//  cada uno de los 40 alumnos y escriba la cantidad de 
//  ellos que no tienen derecho al examen de nivelación.
const obje={
    estu : function (){
        return prompt("ingrese El numero de estudiantes");
    },
    notas:[],
    estudiante:[],
    calculo :function(){
        let estu = parseInt('');
        do{
            if(isNaN(estu))estu = this.estu();
        }while (isNaN(estu));



        return estu

    }
}
const ob=Object.create(obje);
console.log(ob.calculo());