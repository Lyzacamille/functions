// 1. Write a function named "add" that takes two arguments and returns their sum.

function add (a,b){
    return a + b;
}
var x = add(2,4);
console.log(x);
// 2. Write a function named "multiply" that takes two arguments and returns their product.
function multiply (a,b){
    let p1 = 0;
    for (let i = 0; i < b; i++){
        p1 = add(p1,a);
    }
    return p1;
}
var z = multiply(6,8);
console.log(z);

// 3. Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.
function power (x,n) {
    let po = 1;
    for (let i = 0;i < n; i++){
        po = multiply(po,x);
    }
    return po;
}
var y = power(2,8);
console.log(y);
//Write a function named "factorial" that takes a single argument and returns the factorial of that argument.
function factorial (a){
    var fa = 1;
    for (let i = 1; i <= a; i++){
        fa = multiply(fa,i)
    }
return(fa);
    
}
console.log(factorial(4));
//Write a function named "fibonacci" that takes an argument n and returns the nth, Fibonacci number (Links to an external site.)
function  fibonacci (n){
        var total = 0;
        var zero = 0;
        var one = 1;
    for (let i = 2; i < n; i++){
        total = add(zero,one);
        zero = one ; 
        one = total;
    
    }
    return(total);
   
}
console.log(fibonacci(8));