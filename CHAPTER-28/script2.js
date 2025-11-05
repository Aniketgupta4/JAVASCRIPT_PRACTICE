// ********* guess output

function test1(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("resolve 1st promise")
        },5000)
    })
    return p1; // return promise
}


function test2(){
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("resolve 2nd promise")
        },5000)
    })
    return p2;  // return promise
}


async function greet(){

    console.log("greet you")

    const data1 = await test1();  // return promise
    console.log(data1);

    const data2 = await test2();  // return promise
    console.log(data2);
}

greet();
console.log("hello coder army")
console.log("how are you")


// output


// **** kya hoga ki greet call -> so sabse pehle greet pe gaye greet you print -> then await aya so ab -> main function back aya isko console wale execute hue then back print await wale
// **** jab await wala resolve hoga tabhi uske baad wale chalega per main wale chal jayegi console wale
// **** promise wale ko microtask queue pe dal deta hai and as stack free isnko bhi chala do

// **** see image1 image2 -> jaise hi test1() await wala ayega first goto stack and 5sec lagega for execute so isko callback queue pe dal dega after 5sec greet and test1 and test1 ke niche wale freeze koi ni chalegai and test1 ko microtask queue pe ajayega so -> gec pe console wale print hongai then stack is empty so microtask se stack pe ayega greet and test1 and execute hongai after 5 sec and again stack is empty test2 microtask queue pe gya after 5sec badd stack pe ayega execute hoga

// greet you
// hello coder army
// how are you
// resolve 1st promise
// resolve 2nd promise


// ---------------------------------------------------------------------



// => use try catch -> error handling

try{
    console.log("hello");
}catch(err){
    console.log(err);
}


// -------------------------------------------------------------------------------------


// **** parallel pe chalao dono ko test1 and test2 ko -> by Promise.all([test1(),test2()]) -> it return arrays

function test1(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("resolve 1st promise")
        },5000)
    })
    return p1; // return promise
}


function test2(){
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("resolve 2nd promise")
        },5000)
    })
    return p2;  // return promise
}


async function greet(){

    console.log("greet you")

    const [data1,data2] = await Promise.all([test1(),test2()])
    console.log(data1);
    console.log(data2);
}

greet();



// ********** promise -> data manayengai kabhi bhi ki yaha se data lake dedo and data ko store kare in variale so not direct use that variable -> kyuki usme data turant ni ata -> so use promise ki data ajayega ya nahi mai bata dunga teko ayega data toh de dunga warna ni aya data toh bata dunga kyu ni aya




