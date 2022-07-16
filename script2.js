//settimeout(func,time);
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let clock = document.getElementById("clock");
let play_btn = document.getElementById("play_btn");
let stop_btn = document.getElementById("stop_btn");
let lap_btn = document.getElementById("lap_btn");
let lap_box = document.getElementById("lap_box");
let pause_symbol = document.getElementById("pause_symbol");

let h=0,mn=0,s=0;

play_btn.addEventListener("click", function(){
    if(pause_symbol.className == "fa-solid fa-pause"){
        pause_symbol.className = "fa-solid fa-play";
        clearInterval(inter);
    }else{
        pause_symbol.className = "fa-solid fa-pause";
        inter = setInterval(calc,1000);
    }
})

stop_btn.addEventListener("click",function(){
    clearInterval(inter);
    h=0,mn=0,s=0;
    display();
    if(pause_symbol.className == "fa-solid fa-pause")
        pause_symbol.className = "fa-solid fa-play";
})

lap_btn.onclick=function(){
    let laps = document.createElement("div");
    let data = document.createElement("div");
    let cross = document.createElement("i");
    laps.className = "laps";
    data.className = "data";
    cross.className = "fa-solid fa-xmark";

    cross.onclick = function(){
        laps.remove();
    }
    
    data.innerHTML = h+':'+mn+':'+s;
    
    laps.appendChild(data);
    laps.appendChild(cross);
    lap_box.appendChild(laps);
}
        
function display(){
    if(h<10){
          hr.innerHTML = '0'+h;
    }else{
          hr.innerHTML = h;
    }
    if(mn<10){
          min.innerHTML = '0'+mn;
    }else{
          min.innerHTML = mn;
    }
    if(s<10){
          sec.innerHTML = '0'+s;
    }else{
          sec.innerHTML = s;
    }
}

function calc(){
    s++;
    if(s==60){
        mn++;
        s=0;
    }if(mn==60){
        h++;
        mn=0;
    }
    display();
}
