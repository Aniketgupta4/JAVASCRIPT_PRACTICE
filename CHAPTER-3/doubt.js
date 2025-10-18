// doubt session


// 1) null vs undefined

let x; // undefined by default present hai
// isme in future kuch bhi aa shakta hai

let a = null; // null -> jaan bhuj ke -> server sahi ni chal ra so null show kardo 
// isme ab kuch ni aa shakta hai 



 // 2) **** js follow unicodes internally  


 // 3) why concole.log(0.1 + 0.2) => 0.3000000000004
       // because -> first convert in binary 0.1 -> 0.000110011... not convert exactly so approx value ati hai
       // similarly 0.2 -> 0.00110011... approx value ati hai
       // when we add both approx value we get 0.0011001100110011... which is again approx value
       // now convert this binary to decimal we get 0.30000000000000004 

        console.log(0.1 + 0.2);



 // 4) bigint 
 
 let money = -1234567890123456789012345678901234567890n; // n lagana padta hai end me
 console.log(money);
 console.log(typeof money);
