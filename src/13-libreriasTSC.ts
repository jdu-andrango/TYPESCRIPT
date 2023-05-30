// librias que son soportadas por el TSC

import {format, compareAsc } from "date-fns";

console.log(0, format (new Date(2000, 11, 10), "MM//dd/yyyy")); //comienzan los meses desde cero

const fechas = [
    new Date (2000, 11, 22),
    new Date (2010, 10, 22),
    new Date (1900, 9, 22),
    new Date (1940, 8, 22),
    new Date (1945, 7, 22)
]

fechas.sort(compareAsc);
console.log(fechas);
