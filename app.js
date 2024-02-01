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
// for (i = 0; i < arr.length; i++) {
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
//   console.log("This array contains X!");
// } else {
//   console.log("This array doesn't contain X!");
// }
