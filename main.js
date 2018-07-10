//document.getElementById('results').innerHTML = "Hello World";

/*
Another Session
*/

/* var greetingString = "Hello";
var myName = prompt("Please Enter Your Name", "");
var concateString;
concateString = greetingString + " " + myName;
document.write(concateString); */

/*
Another Session
data type conversion
*/
/* var myString = "56.02 degrees centigrade";
var myFloat = parseFloat(myString);
document.write(myFloat);
var myInt = parseInt(myString);
document.write(myInt); */

/*
Array
*/
//var myArray = ["Kalyan", "Amit", "Chakraborty"];
//document.write(myArray[0]);
/* for (var i = 0; i < myArray.length; i++) {
  document.write(myArray[i] + "<br>");
  console.log(myArray[i]);
} */
//var myArray2 = ["Kongkon", "Chakraborty"];

//var question1 = prompt("Elder brother name?");
//var question2 = prompt("Younger brother name?");

//console.log("Elder brother name is = " + myArray[(question1 - 1)] + " Younger brother name is = " + myArray2[(question2 - 1)]);

/*
Guessing Game
*/
/*
var animals = ["cat", "dog", "fish", "rabbit"];
var randomIndex = Math.floor(Math.random() * animals.length);
var animalName = animals[randomIndex];
//console.log(animalName);
*/
/*var animals = ["cat", "fish", "rabbit", "dog", "zebra"];
var startVal = animals.length;*/
/*animals.reverse();
animals.sort();
animals.reverse();*/
/*animals.push("snake");
animals.pop();
animals.shift();
animals.unshift("snake");
animals.splice(2, 1);*/
/*animals[20] = "bird";
animals.fill("mouse", startVal, (animals.length - 1));
console.log(animals);*/
/*var animals = ["cat", "fish", "rabbit", "dog", "zebra"];
var getItem = prompt("Enter a item");
var foundItem = animals.indexOf(getItem);
if(foundItem !== -1){
    console.log("found");
} else {
    console.log("not found");
}*/
/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "cat", "dog"];
var getItem = prompt("Enter a item");
var foundItem = arr.indexOf(getItem);
if (foundItem > -1) {
    arr.splice(foundItem, 1);
} else {
    console.log('Data Not found');
}
console.log(arr);*/
/*
Multidimensional array
 */
var arr = [[1, 2, 3, 4, 5], ["Shiful", "Saiful", "Sahim"]];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
