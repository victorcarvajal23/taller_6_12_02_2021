// 4.	El programa muestra primero una tabla de notas 
// con sus equivalentes en el Standard Grading System 
// o el sistema utilizado en los Estados Unidos que va
//  desde la A hasta la F. El programa preguntará al 
//  usuario su nota y transformará ese resultado al 
//  equivalente en el Standard Grading System. También 
//  el programa dará una pequeña pero valiosa recomendación 
//  al usuario respecto a su nivel de estudio y calidad como estudiante. 
const data ={
    nota : function (){
        return prompt("ingrese la nota obtenida en porcentaje segun la tabla");
    },
    Traditional: [
        [90, 100],
        [80, 89],
        [70, 79],
        [60, 69],
        [1, 59],
        [0, 0]
    ],        
    Point_Range:[ 
        [12, 14],
        [9, 11],
        [6, 8],
        [3, 5],
        [1, 2],
        [0, 0],
    ],
    Letter: {
        0: ['A'],
        1: ['B'],
        2: ['C'],
        3: ['D'],
        4: ['E'],
        5: ['F'],
    },
    SBG_Rating: {
        0: [4],
        1: [3],
        2: [2],
        3: [1],
        4: [0],
        5: [0],
    },
    Proficiency_level_witch_standard: {
        0: ['Exceeds proficiency'],
        1: ['Demonstrates proficiency'],
        2: ['Approaches proficiency'],
        3: ['Falls well below proficiency'],
        4: ['Lacks all proficiency'],
        5: ['No attempt made'],
    },
    Recompensa: {
        0: ['Beca 100%'],
        1: ['Beca 80%'],
        2: ['Beca 50%'],
        3: ['Puedes ser mejor'],
        4: ['Matricua condidiconal'],
        5: ['PFU']
    },
    resultado:function(){
        let i=-1;
        let nota = parseInt('');
        do{
            if(isNaN(nota)){
                nota = this.nota();
            }
            i++;
        }while(!(nota>=this.Traditional[i][0]))
        if(nota>100)nota=100;
        let mul=(this.Point_Range[i][1]-this.Point_Range[i][0])/(this.Traditional[i][1]-this.Traditional[i][0]);
        if(isNaN(mul))mul=0;
        let fin=(this.Traditional[i][1])-nota;
        let nueva_nota=this.Point_Range[i][1]-(fin*mul)
        return  `Nota anterior ${nota} \nEquivalente ${nueva_nota}\nLetra ${this.Letter[i]}\nSBG ${this.SBG_Rating[i]}\nPLWS ${this.Proficiency_level_witch_standard[i]}\nRecompensa ${this.Recompensa[i]}`

    }
}
const ob=Object.create(data);
console.log(ob.resultado());