//Chapter 1

//Task 1
//In this task we have to write a program which will console "Hello World".

//console.log("Hello World");

//Task 2
//In this task we have to create a variable and assign a number to it. Print the value of the variable.

// let x = 5;

// console.log(x);

//Task 3
//In this task we have to write a program to sum two numbers and print the result.

//First way

// console.log(5 + 6);

//Second way

// let x = 5;
// let y = 6;
// console.log(x + y);

//Task 4
//In this task we have to write a program to subtract two numbers from each other and print the result.

//First way

// console.log(9 - 5);

//Second way

// let x = 9;
// let y = 5;
// console.log(x - y);

//Task 5
//In this task we have to write a program to multiply two numbers and print the result.

//First way

// console.log(5 * 8);

//Second way

// let x = 5;
// let y = 8;
// console.log(x * y);

//Task 6
//In this task we have to write a program to divide two numbers and print the result.

//First way

// console.log(55 / 5);

//Second way

// let x = 55;
// let y = 5;
// console.log(x / y);

//Task 7
//In this task we have to write a program to calculate the remainder of the division of two numbers.

//First way

// console.log(10 % 2);

//Second way

// let x = 11;
// let y = 5;
// console.log(x % y);

//Task 8
//In this task we have to write a program to create a variable and assign it a string. Then print the length of the string.

// let str = "Country assignment";

// console.log(str.length);

//Task 9
//In this task we have to write a program to concatenate two strings and print the result.

//First way

// let str1 = "It falls ";
// let str2 = "down repeatedly";

// console.log(str1 + str2);

//Second way

// let str1 = "It falls";
// let str2 = " down repeatedly";

// console.log(str1.concat(str2));

//Task 10
//In this task we have to write a program to convert a string into upper case.

// let str = "rainbow shadow";

// console.log(str.toUpperCase());

//Task 11
//In this task we have to write a program to convert a string into lower case.

// let str = "IRON MAN";

// console.log(str.toLowerCase());

//------------------------------------------------------------------------------------------------------------------------
//Chapter 2
//Task 1
//In this task we have to write a program to check whether a number is even or odd.

// let x = 10;

// if (x % 2 === 0) {
//   console.log("Given number is even!");
// } else {
//   console.log("Given number is odd!");
// }

//Task 2
//In this task we have to write a program to check whether a number is positive, negative or zero.

// let x = 0;

// if (x > 0) {
//   console.log("Given number is positive!");
// } else if (x < 0) {
//   console.log("Given number is negative!");
// } else {
//   console.log("Given number is zero!");
// }

//Task 3
//In this task we have to write a program to check if one number is divisible by another number.

// let x = 10;
// let y = 3;
// if (x % y === 0) {
//   console.log("X is divisible by Y !");
// } else {
//   console.log("X isn't divisible by Y !");
// }

//Task 4
//In this task we have to write a program to check if a string is empty or not.

// let str = "     ";

// if (str.trim().length == 0) {
//   console.log("The string is empty!");
// } else {
//   console.log("The string isn't empty!");
// }

//Task 5
//In this task we have to write a program to check whether a string contains a specific word.

// let str = "My beautiful friend";

// console.log(str.includes("friend"));

//Task 6
//In this task we have to write a program to find a minimum of two numbers.

// let x = 7;
// let y = 8;
// if (x > y) {
//   console.log("X is maximum");
// } else {
//   console.log("Y is maximum");
// }

//-----------------------------------------------------------------------------------------------
//Chapter 3
//Task 1
//In this task we have to write a program which prints numbers from 0 to 10.

// for (i = 0; i < 11; i++) {
//   console.log(i);
// }

//Task 2
//In this task we have to write a program to find the length of the longest word in a sentence.

// let sentence = "My name is Alexander";

// let words = sentence.split(" ");
// let longestWord = words[0];

// for (let i = 1; i < words.length; i++) {
//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];
//   }
// }
// console.log(longestWord.length);

//Task 3
//In this task we have to write a program which prints even numbers , from 1 to 20, using for loop

// for (i = 1; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Task 4
//In this task we have to write a program that prompts the user to enter a number and prints "Hello!" as many times,
//as the entered numbers equals to.

// let ask = Number(prompt("Enter the number!"));
// let count = 0;

// while (count < ask) {
//   console.log("Hello!");
//   count++;
// }

//Task 5
//In this task we have to write a program that calculates the sum of numbers, from 1 to 100 using a for loop
//and prints the result

// let sum = 0;
// for (let i = 1; i < 100; i++) {
//   sum += i;
// }
// console.log(sum);

//Task 6
//In this task we have to write a program that takes as input a month number (for January 1, February 2 2etc.)
//and prints the number of days in that month using switch/case.

// let num = Number(prompt("Enter the number!"));

// switch (num) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;
//   case 2:
//     console.log(28);
//     break;
// }

//Task 7
//In this task we have to write a program that asks the user to guess a secret number between 1 and 10.
//Keep asking for guesses until they guess correctly, using a while loop.

// let secretNum = 6;
// let ask = Number(prompt("Enter the number!"));

// while (secretNum !== ask) {
//   ask = Number(prompt("Enter the number!"));
// }

// console.log("Correct!");

//Task 8
//In this task we have to write a program that takes a grade(A,B,C,D or F) as an input and prints the
//appropriate message, using switch/case. For example, if the input is "A", it should print "Awesome!"

// let grades = prompt("Enter the grade!");

// switch (grades) {
//   case "A":
//     console.log("Awesome!");
//     break;
//   case "B":
//     console.log("Good!");
//     break;
//   case "C":
//     console.log("Not bad!");
//     break;
//   case "D":
//     console.log("Weak!");
//     break;
//   case "E":
//     console.log("Passed!");
//     break;
//   case "F":
//     console.log("Failed!");
//     break;
// }

//Task 9
//In this task we have to write a program that prompts the user to enter a password. The program should continue
//to ask for a password until you enter the correct password. After entering the correct password, show a success message.
//The correct password is "12345".

// let askFor = Number(prompt("Enter the correct password!"));
// let password = 12345;

// while (password !== askFor) {
//   askFor = Number(prompt("Enter the correct password!"));
// }

// console.log("Congratulations, correct password!");

//Task 10
//In this task we have to write a function, called sumDigits, that takes a number as an argument and returns the sum
//of its digits.

// function sumDigits(number) {
//   let sum = 0;
//   let str = Math.abs(number).toString();
//   for (i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
//   }

//   return sum;
// }

// console.log(sumDigits(32));

//Task 11
//In this task we have to write a function called countBs, that takes a string as its only argument and returns the number
//of uppercase "B" characters in the string.

// function countBs(str) {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "B") {
//       sum++;
//     }
//   }
//   return sum;
// }

// console.log(countBs("BoBBy's birthday"));

//-------------------------------------------------------------------------------------------------------------------------------
//Chapter 4

//Task 1
//In this task we have to write a program to find the sum of all the numbers in an array.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

//Task 2
//In this task we have to find the average of the numbers in an array.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum / arr.length);

//Task 3
//In this task we have to sort an array of numbers in ascending order.

// let arr = [2, 1, 7, 3, 5, 4];

// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr);

//Task 4
//In this task we have to write a program to find the largest element in an array.

// let arr = [1, 10, 2, 5, 6, 100, 7, 9, 34, 76, 70];

// function sorted(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[arr.length - 1];
// }

// console.log(sorted([1, 10, 2, 5, 6, 100, 7, 9, 34, 76, 70]));

//Task 5
//In this task we have to write a program to find the smallest element of an array.

// let arr = [3, 2, 7, 4, 8, 1];

// function sort(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0];
// }

// console.log(sort([3, 2, 7, 4, 8, 1]));

//Task 6
//In this task we have to write a program to check whether an array contains a particular element or not.

// let arr = [2, 3, 4, 6, 8];
// let x = 1;
// if (arr.includes(x)) {
//   console.log("This array contains  `X`!");
// } else {
//   console.log("This array doesn't contain `X`!");
// }

//Task 7
//In this task we have to write a program to remove an element from an array.

// let arr = [1, 3, 5, 7, 9];

//First way to solve the problem

// let sortedFirst = arr.shift();
// console.log(arr); //To remove first element

// let sortedLast = arr.pop();
// console.log(arr); //To remove last element;

//Second way to solve the problem

// function removeElement(arr, element) {
//   const index = arr.indexOf(element);
//   if (index !== -1) {
//     arr.splice(index, 1);
//   } else {
//     return "Element is not found in an array!";
//   }
//   return arr;
// }

// const arr = [1, 2, 3, 4];
// const element = 5;

// console.log(removeElement(arr, element));

//Task 8

//In this task we have to write a program to count the number of occurrences of a particular element
//in an array.

// let arr = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 5];
// let elementToCount = 1;
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] == elementToCount) {
//     count++;
//   }
// }

// console.log(count);

//Task9
//In this task we have to write a program to find the sum of all even numbers in an array.

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

//Task 10
//In this task we have to write a program to find the second largest number in an array.

// let arr = [1, 5, 2, 7, 3, 88, 34];
// // let sortedArr = arr.sort((a, b) => b - a);
// // console.log(arr[1]);

// //or

// let sortedArr = arr.sort((a, b) => a - b);
// console.log(arr[arr.length - 2]);

//Task 11
//In this task we have to write a program to check if two arrays are equal.

// function equality(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1[i] != arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(equality([1, 2, 3, 4], [1, 2, 3, 4]));

//Task 12
//In this task we have to write a program to merge two sorted arrays into one sorted array.

// let arr1 = [1, 4, 2, 3, 5];
// let arr2 = [7, 8, 20, 23, 54];
// let mergedArr = arr1.concat(arr2);
// let sortedArr = mergedArr.sort((a, b) => a - b);
// console.log(sortedArr);

//Task 13
//In this task we have to write a program to sort an array of strings alphabetically.

// let str = ["dog", "apple", "cat", "ball", "egg", "zebra"];

// let sortedArr = str.sort();
// console.log(sortedArr);

//Task 14
//In this task we have to write a program to find common elements among multiple arrays.

// function findCommonElements(...arrays) {
//   if (arrays.length === 0 || arrays === null) {
//     return;
//   }
//   let baseArray = arrays[0];
//   return baseArray.filter((element) => {
//     return arrays.every((array) => array.includes(element));
//   });
// }

// console.log(
//   findCommonElements(
//     [1, 2, 3, 4],
//     [1, 2, 3, 4, 5],
//     [2, 1, 3, 5, 6, 7],
//     [1, 2, 3, 4, 8]
//   )
// );

//Task 15
//In this task we have to create an object, called "car" for the mark, model and year of the vehicle.Print the object
//to the console.

// const car = { mark: "Toyota", model: "Camry", Year: 2020 };

// console.log(car);

//Task 16
//In this task we have to add a method "start" to the "car" object, that prints "the car is starting!", when it's called;
//Call the start method.

// const car = {
//   Mark: "Toyota",
//   Model: "Camry",
//   Year: 2020,
// };

// car.start = function () {
//   console.log("The car is starting!");
// };

// car.start();

//Task 17
//In this task we have to create another object named "Person", with the name, age and city properties;
//Print the name property using a dot.

// const person = { Name: "Bob", Age: 28, City: "Tbilisi" };

// console.log(person.Name);

//Task 18
//In this task we have to add a new property "Job" to the object "person" and assign it a value.
//Print the updated object.

// const person = { Name: "Bob", Age: 28, City: "Tbilisi" };

// person.job = "Developer";

// console.log(person);

//....................................................................................................................
//Chapter 5
//Task 1
//In this task we have to create an object, named "Person"; The object will have a first name, last name and age.

// const Person = { FirstName: "George", LastName: "Washington", Age: 28 };

// console.log(Person);

//Task 2
//In this task we have to add a function called "sayHello" to the object from previous task, that will print
//the values of the name in the object.

// const Person = {
//   firstName: "George",
//   lastName: "Washington",
//   age: 28,
// };

// (Person.sayHello = function () {
//   console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
// }),
//   Person.sayHello();

//Task 3
//In this task we have to delete age property from previous task object "Person"

// const Person = {
//   firstName: "George",
//   lastName: "Washington",
//   age: 28,
// };

// delete Person.age;

// console.log(Person);

//Task 4
//In this task we have to add the property "job" to the previous task object "Person".

// const Person = {
//   firstName: "George",
//   lastName: "Washington",
//   age: 28,
// };

// Person.job = "Acrobat";

// console.log(Person);

//Task 5
//In this task we have to add the function to the object "Person", that will return the length of the property "job".

// const Person = {
//   firstName: "George",
//   lastName: "Washington",
//   age: 28,
//   job: "Web Developer",
// };

// (Person.length = function () {
//   console.log(`The length of the "job" property is ${this.job.length}`);
// }),
//   Person.length();

//Task 6
//In this task we have to print the amount of methods in the previous task object.

// const Person = {
//   firstName: "George",
//   lastName: "Washington",
//   age: 28,
//   job: "Acrobat",
//   length: function () {
//     console.log(`The length of the "job" property is ${this.job.length}`);
//   },
//   sayHello: function () {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
// };

// function countMethods(obj) {
//   let amount = 0;
//   for (key in obj) {
//     if (typeof obj[key] === "function") {
//       amount++;
//     }
//   }
//   return amount;
// }

// console.log(countMethods(Person));

//Task 7
//In this task we have to check if "Person" object has a "gender" property; If doesn't, create appropriate method.

// const Person = {
//   firstName: "George",
//   lastName: "Washington",
//   age: 28,
//   job: "Acrobat",
//   length: function () {
//     console.log(`The length of the "job" property is ${this.job.length}`);
//   },
//   sayHello: function () {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
//   gender: "Male",
// };

// if (!Person.hasOwnProperty("gender")) {
//   Person.gender = function (gender) {
//     this.gender = "Male";
//     console.log(`Given gender is ${this.gender}`);
//   };
//   Person.gender();
// } else {
//   console.log("Property `gender` is already here!");
// }

//Task 8
//In this task we have to loop through the object(from previous task) and print all properties.

// const Person = {
//   firstName: "George",
//   lastName: "Washington",
//   age: 28,
//   job: "Acrobat",
//   length: function () {
//     console.log(`The length of the "job" property is ${this.job.length}`);
//   },
//   sayHello: function () {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
//   gender: "Male",
// };

// for (property in Person) {
//   console.log(property);
// }

//Task 9
//In this task we have to loop through the object(from previous task) and print all values.

// const Person = {
//   firstName: "George",
//   lastName: "Washington",
//   age: 28,
//   job: "Acrobat",
//   length: function () {
//     console.log(`The length of the "job" property is ${this.job.length}`);
//   },
//   sayHello: function () {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
//   gender: "Male",
// };

// for (property in Person) {
//   let value = Person[property];
//   console.log(value);
// }

//.........................................................................................................................
//Chapter 6
//Task 1
//In this task we have to write a function generateRandomNumber() that takes a minimum and maximum number as arguments and
// returns a random number between the minimum and maximum values.

// function generateRandomNumber(x, y) {
//   let range = y - x;
//   let random = Math.floor(Math.random() * (range + 1)) + x;
//   return random;
// }

// console.log(generateRandomNumber(2, 9));

//Task 2
//In this task we have to write a function called capitalizeWords() that takes a sentence(string)as an argument and returns
//a new sentence where the  first letter of each word is capitalized.

// function capitalizeWords(string) {
//   let splitted = string.split(" ");
//   let capitalized = splitted.map((splitted) => {
//     if (splitted.length > 0) {
//       return splitted[0].toUpperCase() + splitted.slice(1).toLowerCase();
//     } else {
//       return splitted;
//     }
//   });
//   return capitalized.join(" ");
// }

// console.log(capitalizeWords("alexander bRuno was a talented actor"));

//Task 3
//In this task we have to write a function that takes an array of objects and a property name and returns an array
//of unique values for that property from all objects.

// function uniqueValues(objects, key) {
//   const newSet = new Set();
//   objects.forEach((objects) => {
//     if (objects.hasOwnProperty(key)) {
//       newSet.add(objects[key]);
//     }
//   });
//   return Array.from(newSet);
// }

// const information = [
//   { Name: "Bob", SurName: "Washington", Age: 28, Citizenship: "Georgian" },
//   {
//     Name: "Bob",
//     SurName: "Monroe",
//     Age: 29,
//     Citizenship: "American",
//   },
//   { Name: "Alison", SurName: "Smith", Age: 30, Citizenship: "French" },
// ];

// console.log(uniqueValues(information, "Citizenship"));

//Task 4
//In this task we have to write a function that takes a string as an input and returns true if it is a pangram
//(contains every letter of the alphabet at least once), false otherwise.

// function isPangram(string) {
//   const alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   const newString = string
//     .toLowerCase()
//     .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");

//   for (letter of alphabet) {
//     if (!newString.includes(letter)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("The quick brown fox jumps over a lazy  dog"));

//Task 5
//In this task we have to write a function that takes a sentence as an input and returns an array of unique words in
//alphabetical order, excluding common English words, such as "the", "a" and "is".

// function uniqueArr(string) {
//   const newSet = new Set(
//     string.replace(/\b(?:the|a|is)\b|[^\w\s]/g, "").split(" ")
//   );
//   newSet.delete("");
//   const uniqueWords = [...newSet].sort().join(" ");
//   return uniqueWords;
// }

// console.log(uniqueArr("the lion is a very strong animal"));
