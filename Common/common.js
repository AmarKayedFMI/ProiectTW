
localStorage.setItem('1', '1. “Success is not final; failure is not fatal: it is the courage to continue that counts.” – Winston Churchill');
localStorage.setItem('2', '2. “Play by the rules, but be ferocious.” – Phil Knight');
localStorage.setItem('3', '3. “Business opportunities are like buses, there’s always another one coming.” – Richard Branson');
localStorage.setItem('4', '4. “Every problem is a gift—without problems we would not grow.” – Anthony Robbins');
localStorage.setItem('5', '5. “You only have to do a few things right in your life so long as you don’t do too many things wrong.” – Warren Buffett');
localStorage.setItem('6', '6. “Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau');
localStorage.setItem('7', '7. “And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.” – Anaïs Nin');
localStorage.setItem('8', '8. “There’s no shortage of remarkable ideas, what’s missing is the will to execute them.” – Seth Godin');
localStorage.setItem('9', '9. “I don’t know the word ‘quit.’ Either I never did, or I have abolished it.” – Susan Butcher');


document.addEventListener('keydown', (event)=>{
    if(event.key == 'Escape')                      // Event pe baza de tastare de Esc
        alert("You just pressed the Escape key!\nBefore you leave, think about it!");
    else if(event.key in localStorage)
        alert(localStorage.getItem(event.key));
});


const nav = document.querySelector("nav");

let scrollP = window.pageYOffset;

document.addEventListener("scroll",()=>{
    scrollP = window.pageYOffset;
    if(scrollP<0.9*window.innerHeight){
        nav.style.top = "0px";
        nav.style.position = "sticky";
    }
    else if(scrollP>=0.9*window.innerHeight){
        nav.style.position = "absolute";
        nav.style.top = "90vh";
    }
});


const burger = document.querySelector(".burger");
const burgerDiv = document.querySelectorAll(".burger div");
const navList = document.querySelector(".links");
const navLinks = document.querySelectorAll(".links li");

burger.addEventListener("mouseover",()=>{
    burgerDiv.forEach((line)=>{
        // line.style.animation = "burgerHover 0.7s ease forwards";
        line.style.width = "45px";
        line.style.height = "4px";
        line.style.boxShadow = "1px 1px 10px white, -1px -1px 10px white";
    });
});

burger.addEventListener("mouseleave",()=>{
    burgerDiv.forEach((line)=>{
        // line.style.animation = "burgerHover 0.7s ease reverse";
        line.style.width = "35px";
        line.style.height ="2px";
        line.style.boxShadow = "none";
    });
});

burger.addEventListener("click",()=>{
    if(navList.style.transform == ""){
        navList.style.transform = "translateX(0vw)";
    }
    else{
        navList.style.transform = "";
    }
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = "";
        }
        else
            link.style.animation = `link-slide-left 0.2s ${index/5}s ease-in forwards`;
    });
});


const dropIcon = document.querySelector("#drop-icon");
const menu = document.querySelector(".menu");

dropIcon.addEventListener("click", ()=>{
    menu.classList.toggle("menu-active");
});



const navTitle = document.querySelector(".nav-title");

// console.log(window.getComputedStyle(navTitle).getPropertyValue('font-size'));


// console.log(document.querySelectorAll(".links>li"));

