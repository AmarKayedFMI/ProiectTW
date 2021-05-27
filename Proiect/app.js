const quotes = document.querySelectorAll(".quote1, .quote2, .quote3");
const main = document.querySelector("main");
const mainText = document.querySelector(".main-text");
const cards = document.querySelectorAll(".cards li");
const cardsTitle = document.querySelector(".cards h1");
const formTitle = document.querySelector(".form h1");
const formBox = document.querySelector(".form-box");
console.log(window.innerHeight);


let scrollPosition = window.pageYOffset;
let ok = 0;

window.addEventListener("load",()=>{
    mainText.style.animation = "text-appear 2s 0.7s ease forwards";
});

document.addEventListener("scroll",()=>{

    scrollPosition = window.pageYOffset;
    console.log(scrollPosition);
    if(scrollPosition < window.innerHeight){
        main.style.transform = `translateY(${scrollPosition/13}px)`;
        mainText.style.transform = `translateY(${scrollPosition*1.18}px)`;
    }

    if(scrollPosition >= 370 && scrollPosition <= 705)
        quotes[0].style.animation = "slide-right 0.7s ease-in forwards";
    
    else if(scrollPosition >= 706 && scrollPosition <= 1019)
        quotes[1].style.animation = "slide-left 0.7s ease-in forwards";

    else if(scrollPosition >= 1020 && scrollPosition <= 1886)
        quotes[2].style.animation = "slide-right 0.7s ease-in forwards";

    else if(scrollPosition >= 1887 && scrollPosition <= 2350){
        cards[0].style.animation = "fade-in 1s ease forwards";
        cards[1].style.animation = "fade-in 1s 0.3s ease forwards";
        cards[2].style.animation = "fade-in 1s 0.7s ease forwards";
    }
    else if(scrollPosition >= 2351 && scrollPosition < 2830){
        cards[3].style.animation = "fade-in 1s ease forwards";
        cards[4].style.animation = "fade-in 1s 0.3s ease forwards";
        cards[5].style.animation = "fade-in 1s 0.7s ease forwards";
    }
    else if(scrollPosition >= 2830 && scrollPosition <= 3209){
        formTitle.style.animation = "text-appear 0.7s ease forwards";
    }
    else if(scrollPosition >= 3209){
        formBox.style.animation = "text-appear 0.7s ease forwards";
    }

    if(scrollPosition >= 1601 && ok == 0)
        {
            cardsTitle.style.animation = "text-appear 0.7s ease forwards";
            ok++;
            // cardsTitle.innerHTML = cardsTitle.innerHTML.slice(0,1) + "<span> inca ceva </span>" + cardsTitle.innerHTML.slice(1, cardsTitle.innerHTML.length);
            for(let i = 0; i<cardsTitle.innerHTML.length;i++){
                
                // cardsTitle.innerHTML[i] = cardsTitle.innerHTML[i].replace("<span style = \"transform = translateY(20px)\"></span>");
                // console.log(cardsTitle.innerHTML[i]);
                let x = cardsTitle.innerHTML[i];
                // if(i%2 == 0)
                    // cardsTitle.innerHTML = cardsTitle.innerHTML.slice(i) +replace("<span class=\"up\">" + x + "</span>");
                //     cardsTitle.innerHTML[i].style.transform = "translateY(20px)";
                // else
                    // cardsTitle.innerHTML[i] = "<span class=\"down\">" + x + "</span>";
                
                // cardsTitle.innerHTML[i].style.transform = "translateY(10px)";
            }
        }
});



let i = 0;
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function changeBackgroundImage(){

    main.style.backgroundImage = `url("./background images/${images[i]}")`;

    if(i < images.length - 1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeBackgroundImage()",5000);
}

window.onload = changeBackgroundImage;


const authors = document.querySelectorAll(".author");
for(var j = 0; j < authors.length; j++){
    authors[j].addEventListener("mouseover",(e)=>{
        // console.log(e.currentTarget);
        e.currentTarget.style.backgroundColor = "rgb(247, 154, 93)";
    });
    authors[j].addEventListener("mouseleave", (e)=>{
        e.target.style.backgroundColor = "rgb(255, 132, 50)";
    });
}

