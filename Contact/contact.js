
function format(d){
    if(d < 10)
        return "0".concat(d);   // metoda din string
    return d;
}

function updateTime(){
    const d = new Date();
    const date = document.querySelector(".date");
    
    date.innerHTML = `${format(d.getHours())}:${format(d.getMinutes())}:${format(d.getSeconds())}  ${format(d.getDay())}.${format(d.getMonth())}.${format(d.getFullYear())}`;
}

setInterval(updateTime, 1000);
