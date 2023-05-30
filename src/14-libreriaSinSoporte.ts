//npm install date-fns --save
//npm i -g npm
//npm fund
//npm i -save lodash
//npm i @types/lodash
//librerias no soportadas por tsc
import _ from 'lodash';

const data = [
    {
        user : "Diego",
        role : "Docente"
    },
    {
        user : "Guaman",
        role : "Docente"
    },
    {
        user : "byron",
        role : "docente"
    },
    {
        user : "Esteban",
        role : "Estudiante"
    },
    {
        user : "Billy",
        role : "Estudiante"
    },
    {
        user : "Kevin",
        role : "Estudiante"
    },
    {
        user : "Kenth",
        role : "Estudiante"
    },
    {
        user : "Andres",
        role : "Estudiante"
    },
]

console.log(data);

console.log(_.chunk(data, 2)[2]);

const rta = _.groupBy(data, (item) => (item.role));
console.log(rta);

const ejemplo = _.join(data, '|||');
console.log(ejemplo);
