console.log("Hello Functions");
// ---------              ES5  Functions :       ///
/// Function : simple function with no Parameters and no Arhuments :
function myName() {
    console.log("Abid");
}
myName();
/// Function with single Parameter and Single Arguments
function myCity(city) {
    console.log("I live in ".concat(city));
}
myCity("Mirpurkhas"); // Mirpurkhas is an Argument
/// Function with Multiple Parameters and Arguments';
function myBros(name1, name2) {
    console.log("My brothers are ".concat(name1, " and ").concat(name2));
}
myBros("Amir", "Waseem"); // Amir and waseem both are Arguments:
///  
function siblings(n1, n2, n3) {
    console.log("My siblings are ".concat(n1, ", ").concat(n2, " and ").concat(n3, " "));
}
siblings("Waseem", "Amir", "Iqra");
/// Function with Multiple Parameters and Arguments' with Number Datatype;
function num(num1, num2) {
    console.log(num1 + num2);
}
num(25, 30);
/// Function with Multiple Parameters and Arguments' with Number Datatype;
function numbers(nums1, nums2, nums3) {
    console.log(nums1 + nums2 + nums3);
}
numbers(25, 30, 15);
//
function favColor(color1, color2, color3) {
    console.log("My favourite colors are ".concat(color1, ", ").concat(color2, " and ").concat(color3));
}
favColor("Green", "White", "Black"); // if I try to add Datatype other than , it will show an error:
favColor(111, 222, 333); // But not showing an error . converting number type to string
//favColor(1+2+3)
///   ES6 Function Arrow => Functions:
var myFunction = function () { return 123; };
