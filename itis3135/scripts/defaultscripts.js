

var name;
var feeling;
function questions(){
    setName(prompt("Please enter your name", " "))
    setFeeling(prompt("How are you feeling?", "  "))
    document.getElementById("date").innerHTML = "Today is " + getCurrentTime() + " on " +  getTodaysDate() + ", " + currentYear;
    document.getElementById("welcome").innerHTML="Ewekjira designers welcomes you, " + getName()  + "!\n" +
    "We're glad you are doing "+ getFeeling() + ".";
}

function setName(name){
    this.name =name;
}
function setFeeling(feeling){
    this.feeling=feeling;
}
function getName(){
    return name;
}
function getFeeling()
{
    return feeling;
}
function getTodaysDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] ;
}

function getCurrentTime() {
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}

const currentYear = new Date().getFullYear();


function getAccelaration()
{
    var mile =prompt("Please enter a distance in miles")
    var time =prompt("Please enter a time in second")
    acceleration =mile/(time*time);
    document.getElementById("speed").innerHTML ="Accelearation is equal: " + acceleration + "mi / s2 "+ " Thank you for using our app!";
}

function BodyMassIndex()
{
    var height =prompt("Please enter your height in meter? ")
    var weight =prompt("Please enter weight in kilogram? ")
    bodyMassIndex =weight/(height*height);
    var num =bodyMassIndex.toFixed(2);
    if (bodyMassIndex <= 18.5 )
    {
     var check ='underweight';
    }
        
    if (bodyMassIndex > 18.5 && bodyMassIndex < 24.9)
    {
     var check ='Healthy weight';
    }
       
    if (bodyMassIndex > 24.9 )
    {
     var check ='overweight';
    }

    
    document.getElementById("BMX").innerHTML ="Your body mass index is: " + num + " , "  +  check + "! " + " Thank you for using our app!";
}