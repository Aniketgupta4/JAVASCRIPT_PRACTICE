// arr.sort() -> not give correct output -> firstly it convert into string then checks -> see image1


// // bohot sare questions hai but only 5 random show karne hai
// // store all questions , options and answers in an array of objects [{},{},{},{},.....]
// // fir usme se 5 random questions uthake form me show karne hai
// // form submit hone par answers check karne hai aur score show karna hai


// const questionBank = [
//   {
//     question: "Who has the most centuries in international cricket?",
//     options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
//     answer: "Sachin Tendulkar"
//   },
//   {
//     question: "Which country won the first ever Cricket World Cup in 1975?",
//     options: ["Australia", "India", "West Indies", "England"],
//     answer: "West Indies"
//   },
//   {
//     question: "Who was the first batsman to score a double century in ODIs?",
//     options: ["Rohit Sharma", "Virender Sehwag", "Sachin Tendulkar", "Chris Gayle"],
//     answer: "Sachin Tendulkar"
//   },
//   {
//     question: "Who has taken the most wickets in Test cricket?",
//     options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
//     answer: "Muttiah Muralitharan"
//   },
//   {
//     question: "Who won the ICC Cricket World Cup 2011?",
//     options: ["India", "Sri Lanka", "Australia", "Pakistan"],
//     answer: "India"
//   },
//   {
//     question: "Which Indian bowler is known as the ‘Yorker King’?",
//     options: ["Bhuvneshwar Kumar", "Mohammed Shami", "Jasprit Bumrah", "Zaheer Khan"],
//     answer: "Jasprit Bumrah"
//   },
//   {
//     question: "Which player has the highest individual score in ODIs?",
//     options: ["Martin Guptill", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
//     answer: "Rohit Sharma"
//   },
//   {
//     question: "Which team has won the most ICC Cricket World Cups?",
//     options: ["India", "Australia", "West Indies", "England"],
//     answer: "Australia"
//   },
//   {
//     question: "Who was the captain of India during the 1983 World Cup victory?",
//     options: ["Kapil Dev", "Sunil Gavaskar", "Mohammad Azharuddin", "Ravi Shastri"],
//     answer: "Kapil Dev"
//   },
//   {
//     question: "Who hit six sixes in an over in T20 World Cup 2007?",
//     options: ["MS Dhoni", "Yuvraj Singh", "Virender Sehwag", "Rohit Sharma"],
//     answer: "Yuvraj Singh"
//   },
//   {
//     question: "Which cricketer is known as 'The Wall'?",
//     options: ["Rahul Dravid", "VVS Laxman", "Sachin Tendulkar", "Sourav Ganguly"],
//     answer: "Rahul Dravid"
//   },
//   {
//     question: "Which bowler has the best bowling figures in ODIs?",
//     options: ["Chaminda Vaas", "Shahid Afridi", "Glenn McGrath", "Chaminda Vaas"],
//     answer: "Chaminda Vaas"
//   },
//   {
//     question: "Who was the first Indian to score a triple century in Tests?",
//     options: ["Virender Sehwag", "Sunil Gavaskar", "Sachin Tendulkar", "Rahul Dravid"],
//     answer: "Virender Sehwag"
//   },
//   {
//     question: "Who won the ICC T20 World Cup 2022?",
//     options: ["India", "England", "Pakistan", "Australia"],
//     answer: "England"
//   },
//   {
//     question: "Which player has the most runs in T20 Internationals?",
//     options: ["Rohit Sharma", "Virat Kohli", "Babar Azam", "David Warner"],
//     answer: "Virat Kohli"
//   },
//   {
//     question: "Who is known as 'Captain Cool' in cricket?",
//     options: ["MS Dhoni", "Virat Kohli", "Ricky Ponting", "Steve Smith"],
//     answer: "MS Dhoni"
//   },
//   {
//     question: "Who is the only player to score 100 international centuries?",
//     options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Kumar Sangakkara"],
//     answer: "Sachin Tendulkar"
//   },
//   {
//     question: "Which country hosted the 2019 ICC Cricket World Cup?",
//     options: ["India", "Australia", "England", "South Africa"],
//     answer: "England"
//   },
//   {
//     question: "Who was the Player of the Tournament in 2019 World Cup?",
//     options: ["Ben Stokes", "Kane Williamson", "Rohit Sharma", "David Warner"],
//     answer: "Kane Williamson"
//   },
//   {
//     question: "Who hit the winning runs for India in the 2011 World Cup final?",
//     options: ["MS Dhoni", "Gautam Gambhir", "Virat Kohli", "Yuvraj Singh"],
//     answer: "MS Dhoni"
//   },
//   {
//     question: "Who is the fastest batsman to reach 10,000 ODI runs?",
//     options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "AB de Villiers"],
//     answer: "Virat Kohli"
//   },
//   {
//     question: "Which Indian cricketer is known as the 'Hitman'?",
//     options: ["Virat Kohli", "Rohit Sharma", "Shikhar Dhawan", "Hardik Pandya"],
//     answer: "Rohit Sharma"
//   },
//   {
//     question: "Who bowled the Super Over in 2019 World Cup Final?",
//     options: ["Jofra Archer", "Trent Boult", "Mitchell Starc", "Lockie Ferguson"],
//     answer: "Jofra Archer"
//   },
//   {
//     question: "Which country won the ICC World Cup 1996?",
//     options: ["India", "Sri Lanka", "Australia", "Pakistan"],
//     answer: "Sri Lanka"
//   },
//   {
//     question: "Which batsman is called ‘Universe Boss’?",
//     options: ["Chris Gayle", "AB de Villiers", "Kieron Pollard", "Andre Russell"],
//     answer: "Chris Gayle"
//   },
//   {
//     question: "Who was the first bowler to take 10 wickets in a Test inning?",
//     options: ["Jim Laker", "Anil Kumble", "Ajaz Patel", "Muttiah Muralitharan"],
//     answer: "Jim Laker"
//   },
//   {
//     question: "Which country won the first ICC T20 World Cup?",
//     options: ["India", "Pakistan", "West Indies", "Australia"],
//     answer: "India"
//   },
//   {
//     question: "Who scored 264 runs in an ODI match?",
//     options: ["Rohit Sharma", "Martin Guptill", "Virender Sehwag", "Chris Gayle"],
//     answer: "Rohit Sharma"
//   },
//   {
//     question: "Who was the youngest captain to win the ICC Trophy for India?",
//     options: ["MS Dhoni", "Virat Kohli", "Kapil Dev", "Ajay Jadeja"],
//     answer: "MS Dhoni"
//   },
//   {
//     question: "Who is the only bowler to take 800 Test wickets?",
//     options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"],
//     answer: "Muttiah Muralitharan"
//   },
//   {
//     question: "Who won the Orange Cap in IPL 2023?",
//     options: ["Shubman Gill", "Virat Kohli", "Faf du Plessis", "Ruturaj Gaikwad"],
//     answer: "Shubman Gill"
//   },
//   {
//     question: "Who was the first cricketer to score 4 consecutive ODI centuries?",
//     options: ["Virat Kohli", "Kumar Sangakkara", "Babar Azam", "AB de Villiers"],
//     answer: "Kumar Sangakkara"
//   },
//   {
//     question: "Which team has the nickname 'Men in Blue'?",
//     options: ["India", "Australia", "England", "Sri Lanka"],
//     answer: "India"
//   },
//   {
//     question: "Which player scored the fastest century in ODI cricket?",
//     options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Virat Kohli"],
//     answer: "AB de Villiers"
//   },
//   {
//     question: "Who is the current captain of the Indian Test team (as of 2025)?",
//     options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Ravindra Jadeja"],
//     answer: "Rohit Sharma"
//   },
//   {
//     question: "Who was the first Indian woman to score a double century in Tests?",
//     options: ["Mithali Raj", "Smriti Mandhana", "Harmanpreet Kaur", "Jhulan Goswami"],
//     answer: "Mithali Raj"
//   },
//   {
//     question: "Which Indian spinner is nicknamed 'Turbanator'?",
//     options: ["Anil Kumble", "Ravichandran Ashwin", "Harbhajan Singh", "Ravindra Jadeja"],
//     answer: "Harbhajan Singh"
//   },
//   {
//     question: "Who won the ICC Champions Trophy in 2013?",
//     options: ["India", "England", "Australia", "South Africa"],
//     answer: "India"
//   },
//   {
//     question: "Which player has the most ducks in international cricket?",
//     options: ["Muttiah Muralitharan", "Sanath Jayasuriya", "Mahela Jayawardene", "Wasim Akram"],
//     answer: "Muttiah Muralitharan"
//   },
//   {
//     question: "Which bowler delivered the fastest recorded ball in cricket history?",
//     options: ["Brett Lee", "Shoaib Akhtar", "Mitchell Starc", "Dale Steyn"],
//     answer: "Shoaib Akhtar"
//   },
//   {
//     question: "Who hit the first ball of the 2011 World Cup for a six?",
//     options: ["Virender Sehwag", "Sachin Tendulkar", "Tillakaratne Dilshan", "Brendon McCullum"],
//     answer: "Virender Sehwag"
//   },
//   {
//     question: "Which Indian cricketer has the nickname 'Gabbar'?",
//     options: ["Rohit Sharma", "Shikhar Dhawan", "Hardik Pandya", "Virat Kohli"],
//     answer: "Shikhar Dhawan"
//   },
//   {
//     question: "Which player has played the most Test matches?",
//     options: ["Sachin Tendulkar", "Steve Waugh", "Ricky Ponting", "Alastair Cook"],
//     answer: "Sachin Tendulkar"
//   },
//   {
//     question: "Who was the first batsman to score 10,000 runs in Test cricket?",
//     options: ["Sunil Gavaskar", "Sachin Tendulkar", "Brian Lara", "Allan Border"],
//     answer: "Sunil Gavaskar"
//   },
//   {
//     question: "Who captained Pakistan to victory in the 1992 World Cup?",
//     options: ["Inzamam-ul-Haq", "Wasim Akram", "Imran Khan", "Waqar Younis"],
//     answer: "Imran Khan"
//   },
//   {
//     question: "Who is the leading wicket-taker in IPL history?",
//     options: ["Lasith Malinga", "Yuzvendra Chahal", "Dwayne Bravo", "Bhuvneshwar Kumar"],
//     answer: "Yuzvendra Chahal"
//   },
//   {
//     question: "Which country won the ICC World Test Championship 2023?",
//     options: ["India", "Australia", "England", "New Zealand"],
//     answer: "Australia"
//   },
//   {
//     question: "Which cricketer is called 'Mr. 360'?",
//     options: ["Glenn Maxwell", "AB de Villiers", "Jos Buttler", "David Warner"],
//     answer: "AB de Villiers"
//   },
//   {
//     question: "Who scored the fastest 50 in T20I cricket?",
//     options: ["Yuvraj Singh", "Chris Gayle", "KL Rahul", "AB de Villiers"],
//     answer: "Yuvraj Singh"
//   },
//   {
//     question: "Which Indian pacer took a hat-trick in a World Cup match?",
//     options: ["Jasprit Bumrah", "Chetan Sharma", "Zaheer Khan", "Mohammed Shami"],
//     answer: "Chetan Sharma"
//   },
//   {
//     question: "Who was the first Indian captain in Test cricket?",
//     options: ["Vijay Hazare", "Lala Amarnath", "CK Nayudu", "Nawab of Pataudi"],
//     answer: "CK Nayudu"
//   },
//   {
//     question: "Which player won the 2023 ICC Men's Cricketer of the Year award?",
//     options: ["Ben Stokes", "Virat Kohli", "Travis Head", "Rohit Sharma"],
//     answer: "Travis Head"
//   }
// ];


// function randomquestion(){

//     const data = new Set(); // duplicate question na aye unique questions aye bs so use set
    
//     while(data.size!=5){
//       const index = Math.floor(Math.random()*50);
//       data.add(questionBank[index]);
//     }

//     return [...data]; // convert set into array

// }



// // select the form and all the elemnts in the form
// // <div>
// // <p></p>
// // <label><input><textnode></textnode></input></label>
// // <label><input><textnode></textnode></input></label>
// // <label><input><textnode></textnode></input></label>
// // <label><input><textnode></textnode></input></label>
// // </div>

// const form = document.querySelector('form')

// const problem = randomquestion() // 5 random question

// // answers -> key:value
// const original_answer = {};


// problem.forEach((obj,index)=>{
    
//     const div_element = document.createElement('div')
//     div_element.className = 'question'
    
//     // answer check
//     original_answer[`q${index+1}`] = obj['answer'];

  
//     // paragraph for question
//     const para = document.createElement('p')
//     para.textContent = `${index+1}. ${obj['question']}`    //  or   obj.question
//     div_element.appendChild(para)


//     // create 4 options
//     obj['options'].forEach((value)=>{    // or   obj.options
//         const label = document.createElement('label')
//         const input = document.createElement('input')
//         input.type = "radio";
//         input.name = `q${index+1}`
//         input.value = data
        
//         label.appendChild(input)
//         label.appendChild(document.createTextNode(data))
//         div_element.appendChild(label)
//         div_element.appendChild(document.createElement('br'))

//     })

//       form.appendChild(div_element);

// })

// // button 
// const button = document.createElement('button')
// button.type = 'submit'
// button.className = 'submit-btn'
// button.textContent = 'submit'

// form.appendChild(button)
  



// // check the submit form

// form.addEventListener('submit',(event)=>{

//     event.preventDefault();
//     const data = new FormData(form)
//     const answer = Array.from(data.values())
    
  
//     // jitne bhi submit karengai utne ka output ayega
//     let result = 0
//     for(let [key,value] of data.entries()){
//         if(value===original_answer[key]){
//             result++;
//         }
//     }

    
//     const out = document.getElementById('out')
//     out.innerText = `${result} out of 5 is correct`

//    // document.getElementById('quiz-container').append(out)

//     form.reset();
// })









// ================================
// 🏏 Cricket Quiz JavaScript Logic
// ================================

// === STEP 1: Create an array of 50 quiz questions ===

const questionBank = [
  {
    question: "Who has the most centuries in international cricket?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ever Cricket World Cup in 1975?",
    options: ["Australia", "India", "West Indies", "England"],
    answer: "West Indies"
  },
  {
    question: "Who was the first batsman to score a double century in ODIs?",
    options: ["Rohit Sharma", "Virender Sehwag", "Sachin Tendulkar", "Chris Gayle"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who won the ICC Cricket World Cup 2011?",
    options: ["India", "Sri Lanka", "Australia", "Pakistan"],
    answer: "India"
  },
  {
    question: "Which Indian bowler is known as the ‘Yorker King’?",
    options: ["Bhuvneshwar Kumar", "Mohammed Shami", "Jasprit Bumrah", "Zaheer Khan"],
    answer: "Jasprit Bumrah"
  },
  {
    question: "Which player has the highest individual score in ODIs?",
    options: ["Martin Guptill", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which team has won the most ICC Cricket World Cups?",
    options: ["India", "Australia", "West Indies", "England"],
    answer: "Australia"
  },
  {
    question: "Who was the captain of India during the 1983 World Cup victory?",
    options: ["Kapil Dev", "Sunil Gavaskar", "Mohammad Azharuddin", "Ravi Shastri"],
    answer: "Kapil Dev"
  },
  {
    question: "Who hit six sixes in an over in T20 World Cup 2007?",
    options: ["MS Dhoni", "Yuvraj Singh", "Virender Sehwag", "Rohit Sharma"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Which cricketer is known as 'The Wall'?",
    options: ["Rahul Dravid", "VVS Laxman", "Sachin Tendulkar", "Sourav Ganguly"],
    answer: "Rahul Dravid"
  },
  {
    question: "Which bowler has the best bowling figures in ODIs?",
    options: ["Chaminda Vaas", "Shahid Afridi", "Glenn McGrath", "Chaminda Vaas"],
    answer: "Chaminda Vaas"
  },
  {
    question: "Who was the first Indian to score a triple century in Tests?",
    options: ["Virender Sehwag", "Sunil Gavaskar", "Sachin Tendulkar", "Rahul Dravid"],
    answer: "Virender Sehwag"
  },
  {
    question: "Who won the ICC T20 World Cup 2022?",
    options: ["India", "England", "Pakistan", "Australia"],
    answer: "England"
  },
  {
    question: "Which player has the most runs in T20 Internationals?",
    options: ["Rohit Sharma", "Virat Kohli", "Babar Azam", "David Warner"],
    answer: "Virat Kohli"
  },
  {
    question: "Who is known as 'Captain Cool' in cricket?",
    options: ["MS Dhoni", "Virat Kohli", "Ricky Ponting", "Steve Smith"],
    answer: "MS Dhoni"
  },
  {
    question: "Who is the only player to score 100 international centuries?",
    options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Kumar Sangakkara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country hosted the 2019 ICC Cricket World Cup?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "England"
  },
  {
    question: "Who was the Player of the Tournament in 2019 World Cup?",
    options: ["Ben Stokes", "Kane Williamson", "Rohit Sharma", "David Warner"],
    answer: "Kane Williamson"
  },
  {
    question: "Who hit the winning runs for India in the 2011 World Cup final?",
    options: ["MS Dhoni", "Gautam Gambhir", "Virat Kohli", "Yuvraj Singh"],
    answer: "MS Dhoni"
  },
  {
    question: "Who is the fastest batsman to reach 10,000 ODI runs?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "AB de Villiers"],
    answer: "Virat Kohli"
  },
  {
    question: "Which Indian cricketer is known as the 'Hitman'?",
    options: ["Virat Kohli", "Rohit Sharma", "Shikhar Dhawan", "Hardik Pandya"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who bowled the Super Over in 2019 World Cup Final?",
    options: ["Jofra Archer", "Trent Boult", "Mitchell Starc", "Lockie Ferguson"],
    answer: "Jofra Archer"
  },
  {
    question: "Which country won the ICC World Cup 1996?",
    options: ["India", "Sri Lanka", "Australia", "Pakistan"],
    answer: "Sri Lanka"
  },
  {
    question: "Which batsman is called ‘Universe Boss’?",
    options: ["Chris Gayle", "AB de Villiers", "Kieron Pollard", "Andre Russell"],
    answer: "Chris Gayle"
  },
  {
    question: "Who was the first bowler to take 10 wickets in a Test inning?",
    options: ["Jim Laker", "Anil Kumble", "Ajaz Patel", "Muttiah Muralitharan"],
    answer: "Jim Laker"
  },
  {
    question: "Which country won the first ICC T20 World Cup?",
    options: ["India", "Pakistan", "West Indies", "Australia"],
    answer: "India"
  },
  {
    question: "Who scored 264 runs in an ODI match?",
    options: ["Rohit Sharma", "Martin Guptill", "Virender Sehwag", "Chris Gayle"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who was the youngest captain to win the ICC Trophy for India?",
    options: ["MS Dhoni", "Virat Kohli", "Kapil Dev", "Ajay Jadeja"],
    answer: "MS Dhoni"
  },
  {
    question: "Who is the only bowler to take 800 Test wickets?",
    options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who won the Orange Cap in IPL 2023?",
    options: ["Shubman Gill", "Virat Kohli", "Faf du Plessis", "Ruturaj Gaikwad"],
    answer: "Shubman Gill"
  },
  {
    question: "Who was the first cricketer to score 4 consecutive ODI centuries?",
    options: ["Virat Kohli", "Kumar Sangakkara", "Babar Azam", "AB de Villiers"],
    answer: "Kumar Sangakkara"
  },
  {
    question: "Which team has the nickname 'Men in Blue'?",
    options: ["India", "Australia", "England", "Sri Lanka"],
    answer: "India"
  },
  {
    question: "Which player scored the fastest century in ODI cricket?",
    options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Virat Kohli"],
    answer: "AB de Villiers"
  },
  {
    question: "Who is the current captain of the Indian Test team (as of 2025)?",
    options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Ravindra Jadeja"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who was the first Indian woman to score a double century in Tests?",
    options: ["Mithali Raj", "Smriti Mandhana", "Harmanpreet Kaur", "Jhulan Goswami"],
    answer: "Mithali Raj"
  },
  {
    question: "Which Indian spinner is nicknamed 'Turbanator'?",
    options: ["Anil Kumble", "Ravichandran Ashwin", "Harbhajan Singh", "Ravindra Jadeja"],
    answer: "Harbhajan Singh"
  },
  {
    question: "Who won the ICC Champions Trophy in 2013?",
    options: ["India", "England", "Australia", "South Africa"],
    answer: "India"
  },
  {
    question: "Which player has the most ducks in international cricket?",
    options: ["Muttiah Muralitharan", "Sanath Jayasuriya", "Mahela Jayawardene", "Wasim Akram"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Which bowler delivered the fastest recorded ball in cricket history?",
    options: ["Brett Lee", "Shoaib Akhtar", "Mitchell Starc", "Dale Steyn"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Who hit the first ball of the 2011 World Cup for a six?",
    options: ["Virender Sehwag", "Sachin Tendulkar", "Tillakaratne Dilshan", "Brendon McCullum"],
    answer: "Virender Sehwag"
  },
  {
    question: "Which Indian cricketer has the nickname 'Gabbar'?",
    options: ["Rohit Sharma", "Shikhar Dhawan", "Hardik Pandya", "Virat Kohli"],
    answer: "Shikhar Dhawan"
  },
  {
    question: "Which player has played the most Test matches?",
    options: ["Sachin Tendulkar", "Steve Waugh", "Ricky Ponting", "Alastair Cook"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who was the first batsman to score 10,000 runs in Test cricket?",
    options: ["Sunil Gavaskar", "Sachin Tendulkar", "Brian Lara", "Allan Border"],
    answer: "Sunil Gavaskar"
  },
  {
    question: "Who captained Pakistan to victory in the 1992 World Cup?",
    options: ["Inzamam-ul-Haq", "Wasim Akram", "Imran Khan", "Waqar Younis"],
    answer: "Imran Khan"
  },
  {
    question: "Who is the leading wicket-taker in IPL history?",
    options: ["Lasith Malinga", "Yuzvendra Chahal", "Dwayne Bravo", "Bhuvneshwar Kumar"],
    answer: "Yuzvendra Chahal"
  },
  {
    question: "Which country won the ICC World Test Championship 2023?",
    options: ["India", "Australia", "England", "New Zealand"],
    answer: "Australia"
  },
  {
    question: "Which cricketer is called 'Mr. 360'?",
    options: ["Glenn Maxwell", "AB de Villiers", "Jos Buttler", "David Warner"],
    answer: "AB de Villiers"
  },
  {
    question: "Who scored the fastest 50 in T20I cricket?",
    options: ["Yuvraj Singh", "Chris Gayle", "KL Rahul", "AB de Villiers"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Which Indian pacer took a hat-trick in a World Cup match?",
    options: ["Jasprit Bumrah", "Chetan Sharma", "Zaheer Khan", "Mohammed Shami"],
    answer: "Chetan Sharma"
  },
  {
    question: "Who was the first Indian captain in Test cricket?",
    options: ["Vijay Hazare", "Lala Amarnath", "CK Nayudu", "Nawab of Pataudi"],
    answer: "CK Nayudu"
  },
  {
    question: "Which player won the 2023 ICC Men's Cricketer of the Year award?",
    options: ["Ben Stokes", "Virat Kohli", "Travis Head", "Rohit Sharma"],
    answer: "Travis Head"
  }
];




// === STEP 2: Select 5 random questions from the questionBank ===
function getRandomQuestions() {
  const selected = new Set();
  while (selected.size < 5) {
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    selected.add(questionBank[randomIndex]);
  }
  return [...selected];
}



// === STEP 3: Display selected questions dynamically ===
const form = document.getElementById('quizform');
const out = document.getElementById('out');
const questions = getRandomQuestions();
const correctAnswers = {}; // store correct answers for checking later

questions.forEach((obj, index) => {
  const div = document.createElement('div');
  div.className = 'question';

  // Question text
  const questionText = document.createElement('p');
  questionText.textContent = `${index + 1}. ${obj.question}`;
  div.appendChild(questionText);

  // Save correct answer
  correctAnswers[`q${index + 1}`] = obj.answer;

  // Create multiple choice options
  obj.options.forEach(option => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${index + 1}`;
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    div.appendChild(label);
  });

  // Add each question div to form
  form.appendChild(div);
});


// === STEP 4: Create Submit Button ===
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Submit';
form.appendChild(button);

// === STEP 5: Handle Form Submission ===
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let score = 0;

  // Check each answer
  for (let [key, value] of formData.entries()) {
    if (value === correctAnswers[key]) {
      score++;
    }
  }

  // Display result
  out.textContent = `🎯 You got ${score} out of 5 correct!`;

  // Optional: Add restart button
  const restartBtn = document.createElement('button');
  restartBtn.textContent = "Restart Quiz";
  restartBtn.style.marginTop = "15px";
  restartBtn.onclick = () => window.location.reload();
  out.appendChild(restartBtn);
});




























