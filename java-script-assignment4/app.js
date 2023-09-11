//................Chapter 17 to 20...........ARRAYS AND LOOP..................

//Q1:Declare and initialize an empty multidimensional array.(Array of arrays)?


// var arr = [["Anees","Ali"],["Sadiq","Faheem"]];

// for(var i=0; i<arr.length;i++){
//     for(var j = 0; j<arr.length; j++){
//         console.log(arr[i][j])
//     }
// }

//Q2:Declare and initialize a multidimensional array representing the following matrix:

// var arr =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for(var i = 0; i<arr.length; i++){
//     for(var j = 0; j<arr[i].length; j++){
//         document.write(arr[i][j])
//     }
//     document.write("<br>")
// }

//Q3:Write a program to print numeric counting from 1 to 10.

// for(var i = 1; i<=10; i++){
//     console.log(i)
// }

//Q4:Write a program to print multiplication table of any
//number using for loop. Table number & length should be
//taken as an input from user.

// var number = prompt("Enter the table of number");
// var numLength = prompt("Enter the length");

// document.write("<h1>Multiplication table of input any number and any length</h1>");

// for(var i=0; i<=numLength; i++){
//      document.write(number + "x" + i + "=" + number * i + "<br>")
// }

//Q5:Write a program to print items of the following array
// using for loop:

// var fruits = ["apple", "banan", "mango", "orang","strawberry"];

// for(var i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

//Q6Generate the following series in your browser. See example output.

// var counting = [1,2,3,4,5,6,7,8,9,10];
// document.write("<h1>Counting</h1>")
// for(var i = 0; i<counting.length; i++){
//     document.write("<br>")
//     document.write(counting[i]);
// }

// var counting = [1,2,3,4,5,6,7,8,9,10];
// document.write("<h1>Reverse Counting</h1>")
// for(var i = 10; i>0; i--){
//   console.log(i)
// } 

// var counting = [0,1,2,3,4,5,6,7,8,9,10,12,14,16,18,20];

// for(var i = 0; i<counting.length; i++){
//     if(counting[i]%2===0){
//         console.log(counting[i])
//     }
// else{
//     console.log(counting[i])
// }
// }

// var counting = [0,1,2,3,4,5,6,7,8,9,10,12,14,16,18,20];

// for(var i = 0; i<counting.length; i++){
//         if(counting[i]%2 !==0){
//             console.log(counting[i])
//         }
//     }

// var counting = [0,1,2,3,4,5,6,7,8,9,10,12,14,16,18,20];

// for(var i = 0; i<counting.length; i++){
//     if(counting[i]%2===0){
//         console.log(counting[i]+"k");
//     }

// }


//Q7:Write a program to enable “search by user input” in array.After searching, prompt the user whether the given item is
//found in the list or not. Example:

// var user = prompt("What do you want to order");
// var arr = ["cake", "apple" , "pie", "cookie", "chips", "patties"];
// var flag = "not available"

// for(var i = 0; i<arr.length; i++){
//     if(user === arr[i]){
//         flag = "available";
//         alert(arr[i]+ " this available on our bakery");
//     }
// }
// if(flag === "not available"){
//     alert(user + " this is not available on our bakery");
// }

//Q8:Write a program to identify the largest number in the given array.
// var a = [24, 53, 78, 91, 12];
// var max = "";

// for(var i = 0; i<a.length; i++){
//     if(a[i]>max){
//         max = a[i];
//     }
// }
// console.log(max);

//Q9:Write a program to identify the smallest number in the given array.
// var arr = [24, 53, 78, 91, 12];
// var min = arr[0];

// for(var i = 0; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }
// console.log(min);

//Q10:Write a program to print multiples of 5 ranging 1 to 100.

// for(var i=5; i<=100; i++){
//     if(i%5===0){
//         console.log(i)
//     }
// }












