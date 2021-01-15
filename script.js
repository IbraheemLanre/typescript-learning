var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a;
var b;
var c = 'true';
a = 'bye bye'; // initial value of a number => a : number
b = 'Hello world'; // initial value of a string => a : string
var getMessage = function (first, second, third) {
    return first + " " + second + " " + third;
};
getMessage = function (first, second, third) {
    return 2;
};
var printMessage = function (first, second, third) {
    console.log(first + " " + second + " " + third);
};
console.log(getMessage(a, b, c));
var arr1 = [1, 2, 3, 4, 5, 6]; // array of numbers
var arr2 = ['hello', 'my', 'name', 'is'];
var arr3 = [true, false, true, false];
var arr4 = [true, 1];
var arr5 = [];
var arr6 = [];
arr6.push('Laura', 2, false, 'Hoang');
console.log(arr6);
arr4.push(25);
arr4.push(false);
console.log(arr4);
arr4[0] = 10;
console.log(arr4);
arr1.push(10);
arr2.push('Hoang');
arr3.push(true); // pushing a variable of different datatype other than a number into an array of numbers
console.log(arr2);
var obj1 = {
    name: 'Hoang',
    age: 30,
    jump: true
};
obj1 = {
    name: 'Margit',
    age: 0,
    jump: false
};
var obj2 = __assign(__assign({}, obj1), { lastName: 'Tennosaar' });
console.log(obj2);
// obj1.lastName = 'Tennosaar'
var main = document.getElementById('mainContent');
main.innerHTML = "Hello " + obj2.name + " " + obj2.lastName;
// console.log(main.value)
var firstName = document.getElementById('#firstName');
var inputs = document.querySelectorAll('.userInput');
console.log(inputs[0].value);
console.log(firstName.value);
