let isdob=false;
let dobvalue;
const settingicons=document.getElementById("settingicon");
const settingcontents=document.getElementById("settingcontents");
const initialtext=document.getElementById("initialtext");
const afterdobbutton=document.getElementById("afterdobbutton");
const dobBtn=document.getElementById("dobButton");
const dobinput=document.getElementById("dobinput");
const year=document.getElementById("year");
const month=document.getElementById("month");
const day=document.getElementById("day");
const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");


const togglesetting=()=>{
    if(isdob){
        settingcontents.classList.add("hide");
    }else{
        settingcontents.classList.remove("hide");
    }
    isdob=!isdob;
    console.log("toggle== "+ isdob);
}
settingicons.addEventListener("click",togglesetting);

const updatedate=()=>{
    const currentdate=new Date();
    const datedif=currentdate-dobvalue;
    const years=Math.floor(datedif/(1000*60*60*24*365));
    const months=Math.floor(datedif/(1000*60*60*24*365))%12;
    const days=Math.floor(datedif/(1000*60*60*24))%30;
    const hours=Math.floor(datedif/(1000*60*60))%24;
    const minutes=Math.floor(datedif/(1000*60))%60;
    const seconds=Math.floor(datedif/1000)%60;

    year.innerHTML=years;
    month.innerHTML=months;
    day.innerHTML=days;
    hour.innerHTML=hours;
    minute.innerHTML=minutes;
    second.innerHTML=seconds;
    console.log({
        years,months,days,hours,minutes,seconds
    })
}
// updatedate();
const dobvaluecall=()=>{
    const dobstring=dobinput.value;
    dobvalue= dobstring ? new Date(dobstring):null;
    if(dobvalue){
        initialtext.classList.add("hide");
        afterdobbutton.classList.remove("hide");
        setInterval(()=>updatedate(),1000);
    }else{
        afterdobbutton.classList.add("hide");
        initialtext.classList.remove("hide");
    }
}

dobvaluecall();
dobBtn.addEventListener("click",dobvaluecall);