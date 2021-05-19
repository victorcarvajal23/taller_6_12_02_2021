// 5.	El profesor de una materia desea conocer la
//  cantidad de sus alumnos que no tienen derecho al 
//  examen de nivelación. Diseñe el algoritmo que lea 
//  las calificaciones obtenidas en las 5 unidades por 
//  cada uno de los 40 alumnos y escriba la cantidad de 
//  ellos que no tienen derecho al examen de nivelación.
const obje={
    nuevo:[],
    calculo :function(){
        let estudiantes=2;
        let promedio=new Array(estudiantes).fill(0)
        let uno=[]
        for (let i = 0; i < estudiantes; i++) {
            this.nuevo.push(i)
            uno=[];
            for (let j = 0; j < 5; j++) {
            uno.push(parseInt(prompt(`ingrese nota ${j+1} del estudiante ${i+1}`)));
            //if(typeof uno[j]!=="number"){j--}
            this.nuevo[i]=uno;
            promedio[i]=(promedio[i]+(uno[j]/5));
            }
        }        
        return console.log({presenta:promedio.filter(promedio=>promedio>= 30).length,
            pierde:promedio.filter(promedio=>promedio< 30).length});

    }
}
const ob=Object.create(obje);
ob.calculo();