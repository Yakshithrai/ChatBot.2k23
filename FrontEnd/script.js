const userMessage = [
  ["hi","hii","hai","hyy","hlo", "hey", "hello"],
  ["address of the college","tell me address","address","college address"],
  ["contact number","phone number","contact","mobile number"],
  ["fax","fax number","fax no"],
  ["admission","admission procedure","admission policies"],
  ["placement","placement office","placement cell"],
  ["principal","principal contact","principal number"],
  ["hostel","hostel office"],
  ["who created you", "who made you", "who is your creator"],
  ["college have wifi","is it wifi enabled campus?","is it wifi enabled campus"],
  ["admission process","entrance test","management seat"],
  ["kea","kea code","admission code","cet code"],
  ["comedk","comedk code"],
  ["thanks", "thank you"],
  ["documents required at the time of admission","documents for admission","documents","document"],
  ["about vcet", "tell me about vcet","vcet","vcet puttur"],
  ["student","faculty","visitor","guest","i'm student","i'm teacher","i'm a visitor","random person","human","your friend","information seeker"],
  ["recruiters for cs","cs placement"],
  ["recruiters for ec","ec placement"],
  ["course","courses"],
  ["event","events"],
  ["fee structure for ug","fees structure for ug","college fee","college fees","fee","fees"],
  ["companies","company","companies at vcet"],
  ["good morning","good afternoon","good evening","good night"]
];
const botReply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Nehru Nagar, Puttur, Dakshina Kannada, Karnataka, 574203. INDIA"],
  ["+91-8251-235955"],
  ["+91-8251–236444"],
  ["Prof. Vandana Shankar, Contact: 9945575955, Dr. Chethan P.D, Contact: 9945577955"],
  ["Prof. Vandana Shankar, Training & Placement Officer, Phone:08251-234555, Cell: 9945575955, E-mail:placement@vcetputtur.ac.in"],
  ["Dr. Mahesh Prasanna, Email : principal@vcetputtur.ac.in, Phone: +91 99450 16992"],
  ["Contact Num: 08251 236599"],
  ["Team TetraLogic Minds"],
  ["Fully wired Wi-Fi enabled campus."],
  ["Government Quota Seats: 45% of the seats are filled by the Government of Karnataka through Karnataka Examination Authority Bangalore.  Management Quota Seats: 30% Seats are filled by COMEDK through Central Counselling. 25% of the seats are filled by Management."],
  ["OUR INSTITUTION KEA CODE: E121"],
  ["OUR INSTITUTION COMEDK CODE: E148"],
  ["You're welcome"],
  ["Documents Required at the time of Admission: 10th standard marks card for proof of date of birth - Original, 12th standard/ equivalent marks card - Original, Transfer certificate from the institution last attended - Original, Migration Certificate from the University/Board (Non-Karnataka students only). If not available, apply from the parent institute immediately on joining - Original, Conduct Certificate from the institution last attended -Original only, Medical Certificate which mentions the blood group, Passport Size Photographs - 10 numbers, Caste cum Income Certificate (for CET Karnataka Students only), Study Certificate for CET students, A copy of your Account Details.( if availing for scholarship)."],
  ["Vivekananda College of Engineering & Technology (VCET), Puttur, one of the reputed engineering colleges in the coastal region of Karnataka, was established in the year 2001 by Vivekananda Vidyavardhaka Sangha Puttur (R) with the vision of providing quality technical education to the rural parts of coastal Karnataka. Today the Institute has been identified as a centre for excellence in imparting engineering education to aspiring students from all over the country and is bringing out best academic performance from the students.  VCET campus is spread over 25 acres of land. All the modern facilities required for quality education is provided with in the campus."],
  ["Please raise your queries!"],
  ["3"],
  ["2"],
  ["Computer Science & Engineering, Artificial Intelligence & Macine Learning, Computer Science & Engineering (Data Science), Machanical Engineering, Civil Engineering, Department of Bussiness Administration(MBA), Department of MCA"],
  ["Chilume, Kalakadana, College Day, Deepavali and so on"],
  ["Depends on KEA and Government fee structure"],
  ["Infosys,TCS,SAP Labs,Thought Focus,Global Delight,Juego Studio,IBM,HP,Sign Desk,Tenxer Techologies,SLK Software,Global Automation,Red Hat,Robosoft Technologies,Lumen Technologies,Accord Software,Ethnus,Aloha Technologies"],
  ["Greetings of the Day!!! MAY I know who are you?"]
];

const alternative = [
  "Sorry i'm not having info related to this!",
];

const synth = window.speechSynthesis;

function voiceControl(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-aus";
  u.volume = 1;
  u.rate = 1;
  u.pitch = 1;
  synth.speak(u);
}

function sendMessage() {
  const inputField = document.getElementById("input");
  let input = inputField.value.trim();
  input != "" && output(input);
  inputField.value = "";
}
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      input != "" && output(input);
      inputField.value = "";
    }
  });
});

function output(input) {
  let product;

  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  text = text
    .replace(/[\W_]/g, " ")
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .trim();

  let comparedText = compare(userMessage, botReply, text);

  product = comparedText
    ? comparedText
    : alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  //containMessageCheck(string);
  if (item) return item;
  else return containMessageCheck(string);
}

function containMessageCheck(string) {
  let expectedReply = [
    [
      "Good Bye, dude",
      "Bye, See you!",
      "Dude, Bye. Take care of your health in this situation."
    ],
    ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
    ["Have a pleasant evening!", "Good evening too", "Evening!"],
    ["Good morning, Have a great day!", "Morning, dude!"],
    ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
  ];
  let expectedMessage = [
    ["bye", "tc", "take care"],
    ["night", "good night"],
    ["evening", "good evening"],
    ["morning", "good morning"],
    ["noon"]
  ];
  let item;
  for (let x = 0; x < expectedMessage.length; x++) {
    if (expectedMessage[x].includes(string)) {
      items = expectedReply[x];
      item = items[Math.floor(Math.random() * items.length)];
    }
  }
  return item;
}
function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  voiceControl(product);
}
