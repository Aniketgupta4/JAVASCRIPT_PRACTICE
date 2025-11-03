// sab alag alag logic use karte hai same data ke liye


const zodiazSigns = [
    "Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"
];

const compliments = [
    "you are a natural leader with a bold spirit.",
    "your innovative mind is always ahead of its time.",
    "your empathetic nature makes you a great friend.",
    "your energy and enthusiasm are contagious.",
    "your reliability and patience are admirable traits.",
    "your adaptability allows you to thrive in any situation.",
    "your nurturing personality creates a warm environment.",
    "your charisma lights up any room you enter.",
    "your attention to detail is truly impressive.",
    "your sense of fairness brings harmony to those around you.",
    "your intensity and passion drive you to succeed.",
    "your adventurous spirit inspires those around you.",
    "you have a unique ability to connect with others on a deep level.",
    "your creativity knows no bounds and inspires those around you.",
    "your determination and discipline lead you to great heights.",
    "your humanitarian efforts make the world a better place.",
    "your dreamy imagination brings beauty to everyday life.",
    "your pioneering spirit paves the way for others to follow.",
    "your sensual appreciation for life enriches your experiences.",
    "your curious mind is always seeking new knowledge.",
    "your protective instincts make you a loyal friend.",
    "your generous heart touches the lives of many.",
    "your practical approach solves problems efficiently.",
    "your diplomatic skills foster strong relationships.",
    "your transformative energy leads to profound growth.",
    "your honesty and optimism light the path forward.",
    "your steady effort builds a lasting legacy.",
    "your independent thinking sparks innovative ideas.",
    "your empathetic soul understands the feelings of others.",
    "your boldness inspires those around you to take risks."
];

const victimCardCompliments = [
    "you are good,but no one not as good as you.",
    "you try hard, but you can't match up to me.",
    "you have potential, but I am the real deal.",
    "you think you're special, but I'm one of a kind.",
    "you have your strengths, but I outshine you.",
    "you may be reliable, but I am exceptional.",
    "you adapt well, but I thrive effortlessly.",
    "you care deeply, but I am unmatched in loyalty.",
    "you have charm, but I captivate completely.",
    "you are detail-oriented, but I am perfection itself.",
    "you seek balance, but I create harmony.",
    "you are passionate, but I am unstoppable.",
    "you are adventurous, but I lead the way.",
    "you connect with others, but I inspire them.",
    "you create, but I innovate.",
    "you work hard, but I achieve greatness.",
    "you care, but I change the world.",
    "you dream, but I bring visions to life.",
    "you take initiative, but I set the standard.",
    "you enjoy life, but I savor every moment."
];

const recommendations = [
    "Consider taking on a leadership role in your community.",
    "Explore new technologies or innovative projects.",
    "Volunteer for a cause that resonates with your empathetic nature.",
    "Engage in activities that boost your energy and enthusiasm.",
    "Practice patience and reliability in your daily tasks.",
    "Seek out new experiences to satisfy your curiosity.",
    "Create a nurturing environment for yourself and others.",
    "Participate in social events to showcase your charisma.",
    "Organize your workspace to enhance your attention to detail.",
    "Mediation or conflict resolution could benefit from your sense of fairness.",
    "Channel your intensity into a passion project.",
    "Plan an adventurous trip to satisfy your wanderlust.",
    "Join a creative workshop to express your imagination.",
    "Take initiative in pioneering new ideas or projects.",
    "Indulge in sensory experiences that bring you joy.",
    "Enroll in a course to expand your knowledge.",
    "Spend time in nature to fuel your adventurous spirit.",
    "Lead a community project to showcase your leadership skills.",
    "Treat yourself to a sensory experience, like a spa day or gourmet meal.",
    "Join a book club or discussion group to satisfy your curiosity.",
    "Host a gathering to create a warm and nurturing atmosphere.",
    "Volunteer to help others and make a positive impact.",
    "Attend social events to connect with new people.",
    "Take on a project that requires meticulous planning and execution.",
    "Engage in activities that promote balance and harmony.",
    "Pursue a hobby that allows for deep emotional expression.",
    "Set ambitious goals and work steadily towards achieving them.",
    "Collaborate with others to bring innovative ideas to life.",
    "Practice empathy in your daily interactions to deepen connections.",
    "pursue a hobby that allows for deep emotional expression."
];

const predictions = [
    "This year will bring new opportunities for growth and success.",
    "You will find yourself at the forefront of innovative projects.",
    "Meaningful relationships will play a significant role in your life.",
    "Your energy will attract exciting new experiences.",
    "Steady progress will lead to significant achievements.",
    "Your adaptability will open doors to unexpected adventures.",
    "You will create a supportive and loving environment around you.",
    "Your charisma will lead to new friendships and connections.",
    "Attention to detail will result in impressive accomplishments.",
    "Your sense of fairness will help resolve important conflicts.",
    "Your passion will drive you to new heights of success.",
    "An adventurous journey will lead to personal growth.",
    "Your creativity will lead to innovative breakthroughs.",
    "You will pioneer new paths in your personal and professional life.",
    "Sensory experiences will bring you joy and fulfillment.",
    "New knowledge will expand your horizons.",
    "An adventurous spirit will lead you to exciting places.",
    "Leadership opportunities will arise, showcasing your strengths.",
    "Sensory pleasures will enhance your daily life.",
    "Curiosity will lead you to fascinating discoveries."
];    


const form = document.getElementById('astroForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const Name = document.getElementById('fname').value;
    const surName = document.getElementById('lname').value;
    const day = Number(document.getElementById('day').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    const result = document.getElementById('result');
    
    const first_message = `Hello ${Name} ${surName}`;
    const second_message = `You are born on ${day}-${month}-${year}. Your Zodiac sign is ${zodiazSigns[month-1]}`; // array indexing from 0 zodaic ki and month index start form 1 so match karne ke liye -1 kare 
    const third_message = compliments[day-1];
    
    let index = Math.floor(Math.random()*20)
    const fourth_message = victimCardCompliments[index];

    // same recommendation milegi always -> "aniket"*"gupta"*day -> 6*5*3 = 90 % 30 = 3 
    index = (Name.length * surName.length * year.length)%30;
    const fifth_message = recommendations[index];

    // kuch bhi logic laga lo 
    index = (day*month*year)%20;
    const sixth_message = predictions[index];


    result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} Our Recommendation for you : ${fifth_message} Future prediction is : ${sixth_message}`

});
