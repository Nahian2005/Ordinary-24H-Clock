

let save=document.querySelector(".save-btn");

let meassage= document.querySelector(".meassage")

save.addEventListener('mouseover',function(){

    meassage.textContent='only 24h clock is available!'
    
} )

save.addEventListener('mouseout',function(){

    meassage.textContent='';
} )




save.addEventListener('click',sclock);

function sclock(){

let date=new Date();

let hours =date.getHours();

let minutes =date.getMinutes();

let seconds =date.getSeconds();

minutes=formatTime(minutes);
seconds=formatTime(seconds);

let time = hours + "  :  " + minutes+ "  :  " +seconds;

meassage.textContent=time;

setInterval(sclock,1000)





}



function formatTime(value){

    if(value<10){

        value="0"+value;
    }
return value;
}



















