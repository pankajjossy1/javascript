//Javascript code to check a given year is a Leap year or Not a leap Yar 
var year = 2022;
((year % 4 == 0 && year % 100 != 0) || (year % 400 ==0))  ? console.log("leap") : console.log("Not leap");

