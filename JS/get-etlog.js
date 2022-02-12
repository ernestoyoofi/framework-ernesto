let Txt = "Thanks You For Using My Framework 😁👍";
let DaysTef = new Date();
let DaysTer = DaysTef.getFullYear();
var data = document.querySelector("head").getAttribute("data-root");
if (data === "null") {
    console.error('Pleas Check Element <head data-root=""> Or Add Rooting In Element Head, Try Again\n\n© Ernestoyoofi'+DaysTer+'')
}else if(data === ""){
    console.warn('Check Value Form "data-root"\n\n© Ernestoyoofi'+DaysTer+'')
}else {
    console.log(''+Txt+'\n\n© Ernestoyoofi'+DaysTer+'');
}
console.log('Success\n\nData Root :'+data+'\nLocal :'+window.location.hostname+'\n\n© Ernestoyoofi'+DaysTer+'');
