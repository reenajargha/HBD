const gift = document.getElementById("gift");

gift.addEventListener("click", () => {

    gift.classList.add("shake");

    setTimeout(() => {

        gift.classList.remove("shake");
        gift.classList.add("open");

        explodeHearts();

    }, 500);

    setTimeout(() => {

        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "0";

    }, 2300);

    setTimeout(() => {

        window.location.href = "/birthday/";

    }, 3300);

});

function explodeHearts(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.className="heart";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;
        const distance=150+Math.random()*350;

        const x=Math.cos(angle)*distance;
        const y=Math.sin(angle)*distance;

        heart.style.left=(window.innerWidth/2)+"px";
        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.setProperty("--x",x+"px");
        heart.style.setProperty("--y",y+"px");

        heart.style.fontSize=(15+Math.random()*25)+"px";

        setTimeout(()=>{

            heart.remove();

        },2500);

    }

}