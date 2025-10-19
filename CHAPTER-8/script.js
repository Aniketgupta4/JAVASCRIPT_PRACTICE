// date in js


// **** basically system clock se time and date nikal ke deta hai
// if we change our system time and date it will give time and date according to our system
// **** date() -> calculate in miliseconds and covert in date
// ex -> const currentDate = new Date(10000); -> we pass 10000 miliseconds so it give output according to that milisecond -> since it is proved that is calculate date in miliseconds  
// 1 jan 1970 se calculate hona suru karta hai miliseonds se date thik 
// 1 second have 1000 milliseconds

const currentDate = new Date();
console.log("Current Date and Time:", currentDate);
console.log("Current Date and Time:", currentDate.toString());  // indian standard time
console.log("Current Date and Time:", currentDate.toDateString()); // date and time

console.log("Current Date and Time:",typeof currentDate); // object


// currentdate 
console.log(currentDate.getDate())

// currentday -> sunday = 0 and ....... saturday = 6
console.log(currentDate.getDay());

// currentmonth -> jan = 0 ........ dec = 11
console.log(currentDate.getMonth())

// year
console.log(currentDate.getFullYear())

// miliseconds
console.log(currentDate.getMilliseconds())

// minutes
console.log(currentDate.getMinutes())


// ***** why in milliseconds ?
//  let ki 2 log hai and 1 ticket same date pe ticket karray hai so issue hai kaise pata chalega kisko dena hai -> but in milliseconds pe pata chal jayega kisne pehle kiya book usko ticket dedo


// **** give all things in milliseonds
console.log(currentDate.getTime());
console.log(Date.now());


// custom date -> string format hai so -> 1 se hoga indexing jan = 1 , sunday = 1 and so on

const d = new Date("2022-10-20") // date
console.log(d)

const d1 = new Date("2022-10-20T10:10:12") // date and time
console.log(d1)

const d2 = new Date(2022,10,20) // 0 based indexing
console.log(d2.toString())




// 7 things pass -> year month date hour min sec millisecond

const d3 = new Date(2022,10,20,2,3,4,2)
console.log(d3)




// set date components


const d5 = new Date()
d5.setDate(29);
d5.setMonth(0)
d5.setFullYear(2006)
console.log(d5.toString())
console.log(d5.toLocaleDateString())



// date calculation

const date1 = new Date()
const date2 = new Date("2025-04-21")

// answer in millisecond
console.log(date2-date1) 
console.log(date2>date1)
console.log(date2<date1)





// => countdown timer for olympics
// format -> days hour minute second

const date11 = new Date();
const date22 = new Date("2028-02-14T00:00:00");

const dates = date22 - date11;
const dayss = Math.floor(dates/(1000*60*60*24)); // ms -> sec -> min -> hour -> day

        // ye hours 1322.09878076543 point ke baad se calculate hoga so %24 kare
const hour = Math.floor((dates/(1000*60*60))%24) // in hrs
const min = Math.floor((dates/(1000*60))%60) // in minutes
const sec = Math.floor((dates/(1000))%60) // in minutes

console.log(`Olympics countdowntime: Days:${dayss} hour:${hour} minutes:${min} seconds:${sec}`);

