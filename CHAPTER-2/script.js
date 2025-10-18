// datatypes in javascript


// let num = 10 -> memeory allocation happens in RAM 
///////////////////
//               //
//  10   shan    // RAM
// num   name    //
///////////////////

// basially memory allocation in ram always(ram is fast) big big app is in sec memeory then jisko chalna hai so come first in ram 
// 10 is value and num jisme store karray hai hm (address) 
// diff diff types of datas are there 

// primitive and non-primitive data types 
// primitive data type -> num string(" " or ' ') boolean bigint null undefine symbol
// non-primitive data type -> array object function

let acc_bal = 4000; // store any type of values 
console.log(typeof(acc_bal));

let str = "rohit"; // string
console.log(str);

let str1 = 'aniket'; // string
console.log(str1);

let bool = true; // boolean
console.log(bool);


// ** undefined -> initialize only so undefined -> memory is empty 

let und;
console.log(und);


// ** null -> kuch ni dala hu mai 
// bank server low so it reply null abhi ni hai ****(jan bhuj ke bolna hai)
// type of null is ****object -> ERROR THIS IN JS due to 10 day pe bani thi -> update kare gai toh conflict areise in new and old code

let bal = null;
console.log(bal);

// => bigint 

let a = 98765432654387654323456;
console.log(a) // output -> 9.876543265438766e+22

// use n in last bigint

let b = 98765432654387654323456n;
console.log(b);

// number : 64 bit in js
// **** number store in binary and if num is big so suppose 68 bit lagra hai so how to store 68 bit into 64 bit (data los hoga) so to store it (fully without loss) use bigint 

//  __       |    __       __   (ye number batayegai kya hai)| (3 bit number)
// sign bit
// + or - ve
// 0      1    
// so isme se ye hua ki kitne highest and lowest number store kar shakte hai
// 1st is sign bit tell number is positive or negative

// **** for 0 -> 2 repersntaion are there -> 000 (+ve 0)  100 (-ve 0) -> drawbags

// **** adv is 3 bit highest num is +3 to -3  i.e. 2^3 = 8 distribute half half
//                           +ve = 4 (0to3) but by formula = 3 (1to3)
//                           -ve = 4 (0to-3) but by formula = 3 -(1to3)
// (2^3-1 -1) +ve number
// -(2^3 -1 -1)  -ve number

// highest +ve and -ve number of 4 bit _0_ __ __ __ -> 2^4-1 -1 = 7 and -(2^4-1 -1) = -7 


console.log(Number.MAX_SAFE_INTEGER); // highest integer value
console.log(Number.MIN_SAFE_INTEGER); // smallest integer value


//  -> in 64 bit highest number store
//   __        __ __ __ __ __ __ __ __ __ __ __   __ __ __ __ __ .... 64 
// 1 sign bit    11 bit exponent                  52 bit mantisa
// (2^53 -1) highest integer store
// -(2^53-1) smallest integer store

// format -> for 64 bit
//        wrong ->  just like 32 -> (2^53 -1) +ve and for -ve -(2^53 -1) 
// 
//
// why (2^53 -1) and -(2^53 -1)
//   __        __ __ __ __ __ __ __ __ __ __ __   __ __ __ __ __ .... 64 
// 1 sign bit    11 bit exponent                  52 bit mantisa         = 64

// suppose store 42.75 in 64 bit
// store in binary so convert it in binary -> 101010.11 
//                                            1.0101011 * 2^5 (isme banao in 2 ki power always ki left pe single 1 ho 1.something*2^....)
//                                            so 5 is exponent 

//   __        __ __ __ __ __ __ __ __ __ __ __    __ __ __ __ __ .... 64 
// 1 sign bit    11 bit exponent                    52 bit mantisa
//                                                  store point ke badd ke number
//         do  1023 + 5 convert in binary store in mantisa
//         
// **** -> sabse big number store -> and number store in mantisa i.e. 52
//    let 1.11111111111111 all 52 are 1  so total 53 bit (1.1111...*2^52) = 2^53 -1
// so we store (2^53 -1) and -(2^53-1) -> in decimal


// => if we follow normal(1st sign bit then 63 bit values) then we cant store decimal / floating values 
//    since , we use mantisa and exponent approach to get correct answer of decimal values  in 64 bit 


// **** why mantisa and exponent approach ->
//   -> suppose we have to store 1234567890123456789012345678901234567890
//   -> in normal approach we cant store it since its length is more than 63 bit
//   -> so we use mantisa and exponent approach to store it correctly without data loss

//    -> exponent -> store point ke left me kitne shift karna hai (2^5 so 5 store karna hai -> decimal kaha se start hoga)
//    -> mantisa -> point ke bad ke values store karna hai
//    -> isse hume correct value mil jata hai without data loss

// exponent 11 bit -> 0 to 2047 (2^11 -1) -> in expoent is for sign bit _0/1(sign bit)_ __ __ __ __ ...11
// 2^11 half half +ve -ve -> so highest number is 1023 and lowest is -1023 
// since -1023 ko +ve kare 1023 + 1023 = 2046
// drop sign bit wala concept so drop sign bit so 2046 aya -> treat all as unsigned bit
// ******** since we add 1023 bit in exponent
// so calculation become easy -> so sign bit ka concept drop kar diya hai exponent me
// **** image dekho is type ka conversion karna hai in unsinged bit only +ve  -> aage kar diye values kuch shift kar diye

// mantisa 52 bit -> 0 to (2^52 -1)



