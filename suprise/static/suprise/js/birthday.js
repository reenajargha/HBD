/* =====================================
TYPEWRITER
===================================== */

const message=

`Today is your special day.Keep smiling,
keep shining,
and always be happy.
Happy Birthday!❤️ I lovee you so muchh....umhmmma`;

const typing=document.getElementById("typing");

let index=0;

function type(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(type,55);

}

else{

typing.innerHTML+="<span class='cursor'>|</span>";

}

}

type();

/* =====================================
FLOATING HEARTS
===================================== */

const heartContainer=document.getElementById("hearts");

function heart(){

const h=document.createElement("div");

h.className="floating-heart";

h.innerHTML=Math.random()>.5?"❤️":"💖";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=

(6+Math.random()*4)+"s";

h.style.fontSize=

(18+Math.random()*16)+"px";

heartContainer.appendChild(h);

setTimeout(()=>{

h.remove();

},10000);

}

setInterval(heart,350);

/* =====================================
BALLOONS
===================================== */

const balloonBox=document.getElementById("balloons");

function balloon(){

const b=document.createElement("div");

b.className="balloon";

b.innerHTML="🎈";

b.style.left=Math.random()*100+"vw";

b.style.animationDuration=

(8+Math.random()*8)+"s";

balloonBox.appendChild(b);

setTimeout(()=>{

b.remove();

},17000);

}

setInterval(balloon,1200);

/* =====================================
CONFETTI
===================================== */

const confetti=document.getElementById("confetti");

function confettiPiece(){

const c=document.createElement("div");

c.className="confetti";

const colors=[

"#ff4f95",

"#ffcc4d",

"#7c4dff",

"#6ec6ff",

"#81c784"

];

c.style.left=Math.random()*100+"vw";

c.style.background=

colors[Math.floor(Math.random()*colors.length)];

c.style.animationDuration=

(4+Math.random()*4)+"s";

confetti.appendChild(c);

setTimeout(()=>{

c.remove();

},8000);

}

setInterval(confettiPiece,700);

/* =====================================
SPARKLES
===================================== */

const sparkleBox=document.getElementById("sparkles");

function sparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.innerHTML="✨";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

sparkleBox.appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

}

setInterval(sparkle,250);