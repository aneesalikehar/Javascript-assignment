
// document.write("The value of a is 10")


// var a = 10;

// document.write("<br/><br/>")


// var result = a;
// var result = ++a;

// document.write("The value of ++a is ", result);
// document.write("<br/>");
// document.write("Now the value a is 11");


// document.write("<br/><br/>");
// var result = ++a;

 
// document.write("Now the value a is 11");
// document.write("<br/>");
// document.write("Now the value of a is " ,result);

// document.write("<br/><br/>");
// var result = --a;

// document.write("Now the value --a is " ,result);
// document.write("<br/>");
// document.write("Now the value a is 11");


// document.write("<br/><br/>");
// var a = 11;
// var result = a--;


// document.write("Now the value a is 11" ,);
// document.write("<br/>");

// var result = a;
// var result = a--;
// document.write("Now the value of a is " ,result)



// Q2
// var a = 2;
// var b = 1;

// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b +b--;

// var result = --a - --b + ++b + b--;
// document.write(result);


// Q3
// var userName = prompt("userName");

// if(userName ==="Male"){
//   alert("Hello Sir")

// if(userName === "Female")
//   alert("Hello Sir")

// }

// Q6
// var subject1 = prompt ("Enter The name of first Subject" , "math");
// var subject2 = prompt ("Enter The name of second Subject" , "physics");
// var subject3 = prompt ("Enter The name of third Subject" , "urdu");
// var totalMarks = 100;

// var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1));
// var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2));
// var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("Subject 1: " + subject1);
// document.write("Subject 2: " + subject2);
// document.write("Subject 3: " + subject3);
// document.write("Total Obtained Marks: " + totalObtainedMarks);
// document.write("Percentage: " + percentage + "%");


// .........Chapter 11 to 13 USER INPUT & CONDITIONAL STATEMENT...........

// var user = prompt("Enter your city name");

// if(user === "karachi"){
//  alert("Welcome the city of light"
//  )};

// Q2
// var gender = prompt("Kindly input your gender");

// if(gender !== "Male"){
//     alert("Good Morning Sir")
// }
// if(gender !== "Female"){
//     alert("Good Morning Sir")
// }


// Q3
// var user = prompt("Input road color");
// var message = "Not match"

// if(user === "Red"){
//  alert("Must stop")
// } 
// else if(user === "Yellow"){
//  alert("Ready to Move")
// }
// else if(user === "Green"){
//  alert("Move now")
// }

// Q4
// var liter = prompt ("Input remaining fule in the car")
// if(liter < 0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("you have enough fuel")
// }

//Q5

// var a = 4;

// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var a = 10;

// b = (++a);

// if(a === 11){
//     alert ("Condition is true")
// }

// var c = 12;

// if(c++ === 13)
//   alert()
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }\\

// var subject1 = prompt("Enter obtaine marks is subject1");
// var subject2 = prompt("Enter obtaine marks is subject1");
// var subject3 = prompt("Enter obtaine marks is subject1");

// var totalObtainedMarks = subject1 + subject2 +subject3;
// var perctage = (totalObtainedMarks/totalMarks) * 100;

// Q7
// var num = 4;
// var guess = +prompt("guess the secret number");

// if(num === guess){
//     alert("Bingo! Correct answer")
// }
// else if(num+1 === guess){
//     alert("Close enough to the correct answer")
// }else{
//     alert("incorret Answer")
// }



// var userInput = prompt("Enter a number");

// if(userInput/3===0){
//     console.log("number is divisible by 3")
// }else{
//     console.log("number is not divisible by 3")
// }

// Q10
// var temperature = prompt("kindly input temperature");

// if(temperature>40){
//     alert("It is too hot outside")
// }
// else if(temperature>30){
//     alert("The Weather today is Normal")
// }
// else if(temperature>20){
//     alert("Today is Weather is cool")
// }
// else if(temperature>10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }

// Q11
// var firstNum = +prompt("Enter the first number");
// var secondNum = +prompt("Enter the Second number");
// var Operation = prompt("Enter the Operation");

// if(Operation === "+"){
//     console.log(firstNum+secondNum)
// }
// else if(Operation === "-"){
//     console.log(firstNum-secondNum)
// }
// else if(Operation === "*"){
//     console.log(firstNum*secondNum)
// }
// else if(Operation === "/"){
//     console.log(firstNum/secondNum)
// }
// else if(Operation === "/"){
//     console.log(firstNum%secondNum)
// }








// .......................IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION........

// Q2
// var integers = +prompt("Enter the first number");
// var secondndInt = +prompt("Enter the first number");

// if(integers===secondndInt){
//     alert("The two integers are equal"
//     )
// }
// else if(integers>secondndInt){
//     alert("The second integers is less than integers"
//     )
// }

// Q3
// var num = +prompt("enter the num");

// if(num < 0){
//     alert("The num is positiv")
// }
// else if(num > 0){
//     alert("The num is negative")
// }else{
//     alert("The num is zero")
// }

// Q4
// var char = prompt("Enter a Character");
// if(char.length === 1){
// if(char === 'a' || char==='e' || char==='i' || char==='o' || char==='u'){
//     alert("The character is vowels")
// }else{
//      alert("Not a vowel")
// }
// }


//Q5
// var userPassword= prompt("Enter Your Password");
// var samePassword = prompt("Re-enter Your Password")

// if(userPassword ===""){
//     alert("enter your password first")
// }

// else if(userPassword===samePassword){
//     alert("Correct Password")
// }else{
//     alert("Not match password")
// }


