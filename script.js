function sendMessage(){

let input=document.getElementById("userInput");
let message=input.value.trim();

if(message==="") return;

document.getElementById("welcome").style.display="none";

let chatbox=document.getElementById("chatbox");

chatbox.innerHTML+=`
<div class="user">
<span>${message}</span>
</div>
`;

input.value="";

typing();

setTimeout(()=>{

document.querySelector(".typing").remove();

let reply=getReply(message);

chatbox.innerHTML+=`
<div class="bot">
<span>${reply}</span>
</div>
`;

chatbox.scrollTop=chatbox.scrollHeight;

},1200)

}



function typing(){

let chatbox=document.getElementById("chatbox");

chatbox.innerHTML+=`
<div class="bot typing">
<span>AI is typing...</span>
</div>
`;

}



function getReply(msg){

msg=msg.toLowerCase();

/* greeting */

if(msg.includes("hello")||msg.includes("hi")){

return `Hello 👋 Welcome to the AI Chatbot Dashboard.

This chatbot demonstrates how conversational AI works. You can ask questions about Artificial Intelligence, Machine Learning, Programming, and Cloud Computing.`;

}

/* types of ai */

if(msg.includes("types of ai")||msg.includes("different types of ai")){

return `Artificial Intelligence can be divided into several types based on capability.

1. Narrow AI – Designed for specific tasks such as voice assistants and recommendation systems.
2. General AI – A theoretical AI that can perform any intellectual task like humans.
3. Super AI – A future concept where machines become more intelligent than humans.

Another classification includes Reactive Machines, Limited Memory AI, Theory of Mind AI, and Self-aware AI.`;

}

/* machine learning */

if(msg.includes("machine learning")){

return `Machine Learning is a subset of Artificial Intelligence that allows systems to learn from data without being explicitly programmed.

It is widely used in applications such as recommendation systems, image recognition, fraud detection, and spam filtering. The system improves its accuracy as it processes more data.`;

}

/* cloud computing */

if(msg.includes("cloud")){

return `Cloud Computing is a technology that allows users to store and access data and applications through the internet instead of using local storage.

Popular cloud service providers include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform. Cloud computing provides scalability, flexibility, and cost efficiency.`;

}

/* programming */

if(msg.includes("programming")||msg.includes("coding")){

return `Programming is the process of writing instructions that computers can understand and execute.

Developers use programming languages like Python, Java, C++, and JavaScript to create applications, websites, mobile apps, and AI systems. Programming is a fundamental skill in modern technology development.`;

}

/* artificial intelligence */

if(msg.includes("ai")||msg.includes("artificial intelligence")){

return `Artificial Intelligence (AI) is a branch of computer science that focuses on creating intelligent machines capable of performing tasks that normally require human intelligence.

These tasks include learning from data, speech recognition, decision-making, and problem-solving. AI technologies such as machine learning, deep learning, and neural networks enable systems to improve their performance over time.`;

}

/* default */

return `That's an interesting question.

Currently this chatbot is a rule-based AI demonstration system. It responds using predefined knowledge about Artificial Intelligence, Machine Learning, Programming, and Cloud Computing.

Try asking questions like:
• What is AI
• Types of AI
• Explain Machine Learning
• What is Cloud Computing`;

}



function clearChat(){

document.getElementById("chatbox").innerHTML="";
document.getElementById("welcome").style.display="block";

}



/* voice */

function startVoice(){

const recognition=new (window.SpeechRecognition||window.webkitSpeechRecognition)();

recognition.lang="en-US";

recognition.onresult=function(event){

let text=event.results[0][0].transcript;

document.getElementById("userInput").value=text;

sendMessage();

}

recognition.start();

}