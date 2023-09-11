//MATH METHODS

//Q1

//var user = prompt("Enter positive integers");

// console.log("numbers" + " " + user);

// var value = Math.round(user);

// console.log("Round off value" + " " + value);

// var value = Math.floor(user);

// console.log("Floor value" + " " + value);

// var value = Math.ceil(user);

// console.log("Round off value" + " " + value);

//Q2

//var user = prompt("Enter Negative integers");

// console.log("numbers" + " " + user);

// var value = Math.round(user);

// console.log("Round off value" + " " + value);

// var value = Math.floor(user);

// console.log("Floor value" + " " + value);

// var value = Math.ceil(user);

// console.log("Round off value" + " " + value);

//Q3
// var a = -4

// var absolute = Math.abs(a);

// console.log(absolute);

//Q4

// var dice = [1,2,3,4,5,6];

// var value = Math.ceil(Math.random()*dice.length);

// console.log(value);

//Q5

// var head = 1;
// var tail = 2;

// var toss = Math.floor(Math.random()*2);

// if(toss == 1){
//     console.log("coin won win the toss" + " " + head);
// }else{
//     console.log("Coin won the toss" + " " + tail)
// }

//Q6

//console.log(Math.ceil(Math.random(1)*100))

//Q7

// var user = prompt("what is your weight");

// var input = parseFloat(user);

// console.log("the weight is" + " " + input +"kgs" +" " +"Kilograms");

//Q8

// var user = prompt("enter a secret num");

// var random = Math.floor(Math.random()*10+1);
// console.log(random)

// if(user == random){
//     console.log("Congratulate the user");
// }else{
//     console.log("kindly try again")
//

//...................................DATE METHODS........................

// var rightNow = new Date();

// console.log(rightNow);


//Q2

// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//  var current = month[new Date().getMonth()];
//  console.log(current);

//Q3

//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = dayNames[new Date().getDay()];
// console.log("Today is" + " " + currentDay);

//Q4

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var currentDay = dayNames[new Date().getDay()];

// if(currentDay === "Sun" || currentDay==="Sat"){
//     console.log("Its a fun day")
// }else {
//     console.log("Working day")

// }

// if(currentDay==="Sun"){
//     console.log("Its a fun day")
// }
// else if(currentDay==="Sat"){
//     console.log("Its a fun day")
// }
// else{
//     console.log("Working day")

// }

//Q5

// var a = new Date().getDate();
// if(a>15){
//     console.log("Last days of the month");
// }else{
//     console.log("The Fith days of the month")
// }

//Q6

// var currentDate = new Date ();
// console.log(currentDate);

// var milisecFromMidNight = new Date().getTime();
// console.log("Elapsed milliseconds since midnight, Jan 1, 1970:" + milisecFromMidNight);

// var mintuesFromMidNight = milisecFromMidNight/(1000*60*60);
// console.log("Elapsed minutes since midnight, Jan 1, 1970:" + mintuesFromMidNight)

// var birthDate = new Date("28 Oct 1999");
// var currentDate = new Date ();

// var diff =  currentDate - birthDate;
// console.log(diff/(1000*60))
// console.log(diff/(1000*60*60))
// console.log(diff/(1000*60*60*24))
// console.log(diff/(1000*60*60*24*31))
// console.log(Math.floor(diff/(1000*60*60*24*31*12)))

//Q7

// var time = new Date ().getHours();

// if(time >=12){
//     console.log("PM");
// }else{
//    console.log("AM") 
// }

//Q8

// var laterDate = new Date ("30 Dec 2020").getDay();

// console.log(dayName[laterDate]);

//Q9

// var ramdanPastDay = new Date ("18 June 2015");
// var ramdanCurrentDay = new Date ();

// var diff = ramdanCurrentDay - ramdanPastDay;

// console.log(diff/(1000*60*60*24))

//Q10

// var date = new Date ("1 Jan 2015").getTime();
// var currentDate = new Date ().getTime();
// var milliseconds = currentDate - date
// console.log(Math.round(milliseconds/(1000*60*60*24*30*12)));


//Q11

// var currentDate = new Date ();
// console.log(currentDate);

// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours-1);
// console.log(currentDate);

//Q12
// var currentDate = new Date ();
// console.log(currentDate);

// var year = currentDate.getFullYear();
// currentDate.setFullYear(year-100);
// console.log(currentDate);

//Q13
// var user = prompt("enter your age years");
// var year = new Date().getFullYear();

// var age = year - user;
// console.log(age)

//Q14

var customerName = "Anees";
var currentMonth = new Date().getMonth();
var number of unit = 410;
var charges = 16;









































    



