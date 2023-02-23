console.log("HELLO ARROW => FUNCTIONS");


///////////////////////// --------       Simple Function with no parameters and Arguments         ---------///////////////////
let Arr = () => "Abid ALi KHokhar";
console.log(Arr())

//   =>                      ---        With Single Arguments and Parameters ------------/////
let Arr2 = (name) =>`Hello ${name} how are you ?`;
console.log( Arr2("Abid kk") )

// with number data type
let Arr3 = (Age) => `${Age} years old`;
console.log(Arr3(23))



// =>                         ---        With Multiple Arguments and Parameters ------------/////

let Arr4 = (city,country) => `I live in ${city} and I am from ${country}`;
console.log(Arr4('Mirpurkhas','Pakistan'));


////  =>

let Arr5 =(paper1,paper2,paper3,paper4,paper5) => `Exams are starting from 25th Feb 2023. Subject are ${paper1},${paper2},${paper3},${paper4},${paper5}`;
console.log(Arr5('English','Mathematics','Islamic-Studies','Programing','Metaverse and Web 3.0'));

/// =>

let Arr6 = (key) =>  `${key}`;
console.log(Arr6(4545));



/// =>

let Arr7 = (book:string, serial:number) => `please note down book name ${book}  and Serial number is ${serial}`;
console.log(Arr7('Compound Effects',4545))