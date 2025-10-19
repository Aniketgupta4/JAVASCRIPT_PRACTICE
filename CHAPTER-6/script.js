// maths in js

// 1) basics see image1 -> first pe object convert in number so num == num true and in 2nd address compare becuase both are object so address 6000 == 4000 so false

let num1 = 231; // stack memeory allocate
let num2 = new Number(231); // heap memory allocate
let num3 = new Number(231);

console.log(num1,num2)
console.log(typeof num1) // number
console.log(typeof num2) // object

console.log(num1 == num2) // true
console.log(num2 == num3); // false



// tofixed -> point ke baad ki digit 

let num = 231.68
console.log(num.toFixed(3))


// precise kar deta hai values ko

console.log(num.toPrecision(4))
console.log(num.toPrecision(2))


// exponential pe convert karta hai

console.log(num.toExponential(2))


// num to string

console.log(num.toString())


// valueof tell value

console.log(num.valueOf());





// 2) maths -> object


console.log(Math.E)
console.log(Math.PI)
console.log(Math.LN10) // log e 10 
console.log(Math.LN2)  // log 2 10

console.log(Math.floor(23.44))

console.log(Math.ceil(23.46))



// random

// 0<=value<1 lies always -> so *10 so big value ayegi 2.something 
console.log(Math.floor(Math.random()*10))


// 1 to 10 random values

console.log(Math.floor(Math.random()*10)+1)  // -> +1 karne se 0 to 10 tk karega print 


// 11 to 20 generate => +11 kardo so 11 to 20 tk karega -> beacuse it generate 0-9 values

console.log(Math.floor(Math.random()*10)+11)


// generate any random number -> formula

let min = 40 , max = 50;
console.log(Math.floor(Math.random()*(max-min+1)+min))
                            // give 0 to 11   + 40  -> so give values 40 to 50

// -> explanation see image2      






