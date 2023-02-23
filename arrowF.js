console.log("HELLO ARROW => FUNCTIONS");
///////////////////////// --------       Simple Function with no parameters and Arguments         ---------///////////////////
var Arr = function () { return "Abid ALi KHokhar"; };
console.log(Arr());
//   =>                      ---        With Single Arguments and Parameters ------------/////
var Arr2 = function (name) { return "Hello ".concat(name, " how are you ?"); };
console.log(Arr2("Abid kk"));
// with number data type
var Arr3 = function (Age) { return "".concat(Age, " years old"); };
console.log(Arr3(23));
// =>                         ---        With Multiple Arguments and Parameters ------------/////
var Arr4 = function (city, country) { return "I live in ".concat(city, " and I am from ").concat(country); };
console.log(Arr4('Mirpurkhas', 'Pakistan'));
////  =>
var Arr5 = function (paper1, paper2, paper3, paper4, paper5) { return "Exams are starting from 25th Feb 2023. Subject are ".concat(paper1, ",").concat(paper2, ",").concat(paper3, ",").concat(paper4, ",").concat(paper5); };
console.log(Arr5('English', 'Mathematics', 'Islamic-Studies', 'Programing', 'Metaverse and Web 3.0'));
/// =>
var Arr6 = function (key) { return "".concat(key); };
console.log(Arr6(4545));
/// =>
var Arr7 = function (book, serial) { return "please note down book name ".concat(book, "  and Serial number is ").concat(serial); };
console.log(Arr7('Compound Effects', 4545));
