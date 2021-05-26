const root = document.getElementsByClassName("root");
const btn = document.getElementById("btn");
const background = document.querySelector(".before-after");
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


window.onload = function(){
    var httpobject = new XMLHttpRequest();
    var data;
    // httpobject.open('GET','data.json', 'TRUE');
    httpobject.open('GET','people.json', 'TRUE');
    httpobject.send();
    httpobject.onreadystatechange = function(){

    if(httpobject.readyState == 4 && httpobject.status == 200){
        data = JSON.parse(httpobject.responseText);
        printdata(data);
    }


    };

};

function adaugaPersoana(p, ol){
    var element = document.createElement("li");

    element.innerHTML = p.name + " " + p.netWorth.toString().concat("B USD");

    element.style.margin = "1.5% 0%";
    element.style.color = "wheat";
    ol.appendChild(element);
}

function printdata(data){
    btn.addEventListener("click",()=>{
        // console.log(root[0].firstChild);
        if(root[0].firstChild != null)
            root[0].removeChild(root[0].firstChild);
        
        
        let hexScore = "#";
        for(let i=0;i<6;i++){
            hexScore +=hexValues[Math.floor(Math.random()*hexValues.length)];
        }
        // value.innerHTML = hexScore;
        background.style.background=hexScore;
        // console.log(hexScore);
   
        // console.log(data.people.length);
        ol = document.createElement("ol");
        for(var i = 0; i < data.people.length; i++){
            // console.log(data.people[i].name);
            adaugaPersoana(data.people[i],ol);
        }
        
        // console.log(ol);
        

        root[0].appendChild(ol);

    });
    
    document.querySelector("#name-input-submit").addEventListener("click", ()=>{
        const inputBox = document.querySelector("#name-input-box");
        const p = document.querySelector(".answer>p");
        const jobTitle = document.querySelector(".job-title");
        const name = document.querySelector(".name");
        
        var i = 0, ok = 0;
        for(var i = 0; i < data.people.length && ok == 0; i++)
            if(data.people[i].name == inputBox.value)
                ok++;
       
        
        if(ok == 0){
            name.innerHTML = 'Invalid input.'
            p.style.display = "none";
            jobTitle.style.display = "none";
        }
        else{
            // document.querySelector(".answer").style.display = "block";
            p.style.display = "block";
            jobTitle.style.display = "block";
            name.innerHTML = inputBox.value;
            jobTitle.innerHTML = data.people[i-1].title;
            
        }
    });
    
}






