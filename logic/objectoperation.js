// const users = [
//   {
//     name: "John Doe",
//     age: 32,
//     email: "johndoe@example.com",
//     phone: "+1-123-456-7890",
//     address: {
//       street: "123 Main St",
//       city: "Los Angeles",
//       state: "CA",
//       postalCode: "90001",
//       country: "India",
//     },
//     occupation: "Software Developer",
//     company: {
//       name: "Tech Solutions Inc.",
//       position: "Senior Developer",
//       startDate: "2015-08-01",
//     },
//   },
//   {
//     name: "Jane Smith",
//     age: 28,
//     email: "janesmith@example.com",
//     phone: "+1-987-654-3210",
//     address: {
//       street: "456 Elm St",
//       city: "New York",
//       state: "NY",
//       postalCode: "10001",
//       country: "USA",
//     },
//     occupation: "Graphic Designer",
//     company: {
//       name: "Creative Designs Co.",
//       position: "Lead Designer",
//       startDate: "2018-06-15",
//     },
//   },
//   {
//     name: "Michael Brown",
//     age: 40,
//     email: "michaelbrown@example.com",
//     phone: "+1-555-123-4567",
//     address: {
//       street: "789 Oak St",
//       city: "Chicago",
//       state: "IL",
//       postalCode: "60601",
//       country: "USA",
//     },
//     occupation: "Project Manager",
//     company: {
//       name: "Business Solutions Ltd.",
//       position: "Project Lead",
//       startDate: "2010-03-22",
//     },
//   },
// ];

// // appling MAP function

// const data = users.map((item) => item.name);

// console.log("user data is" + data);

// // adding FILTER method

// const filterdata = users.filter((data) => data.address.country === "USA");

// const afterfilterdata = filterdata.map((data) => data.name);
// const useforeach = afterfilterdata.forEach((val) => val); // give undefiend because foreach never return any new array
// const usemap = afterfilterdata.map((val) => val).join(",");

// console.log("after filtering data by the country they are:-", useforeach); // output:- undefiend
// console.log("after filtering data by the country they are:-", usemap);
// afterfilterdata.forEach((val) =>
//   console.log("after filtering data by the country they are:-", val)
// ); // here this is the correct

// // REDUCE METHOD
// // ==================================================
// const data = [1, 2, 3, 4, 5];

// // use reduce method :- this is only return a single value

// const singlereturnvalue = data.reduce((res, current) => res + current, 0);

// console.log("single value is :-", singlereturnvalue);

// //flatening an array
// const data1 = [[1, 2], [3, 4], [5]];

// const flateningarray = data1.reduce((res, current) => res.concat(current));

// console.log("flatening an array is:-", flateningarray);

// // after flatening try to return the single value

// const flateningsinglevalue = flateningarray.reduce(
//   (res, current) => res * current,
//   1
// );

// console.log("after flatening get a single value is:-", flateningsinglevalue);

// // Counting Occurrences of Values
// const fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "apple",
//   "orange",
//   "banana",
//   "apple",
// ];
// const fruitCount = fruits.reduce((accumulator, current) => {
//   accumulator[current] = (accumulator[current] || 0) + 1;
//   return accumulator;
// }, {});
// console.log("Fruit counts:", fruitCount); // Output: Fruit counts: { apple: 3, banana: 2, orange: 2 }

// // Grouping Items by a Property
// const people = [
//   { name: "Alice", age: 25, address: "Bangalore" },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 30 },
// ];

// const groupedByAge = people.reduce((accumulator, current) => {
//   (accumulator[current.age] = accumulator[current.age] || []).push(current);
//   return accumulator;
// }, {});

// console.log("Grouped by age:", groupedByAge);
// /*
// Output:
// Grouped by age: {
//   '25': [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 25 } ],
//   '30': [ { name: 'Charlie', age: 30 }, { name: 'David', age: 30 } ]
// }
// */

// // Converting an Array to an Object

// const users = [
//   { id: 1, name: "Alice", age: "21" },
//   { id: 2, name: "Bob", age: "22" },
//   { id: 3, name: "Charlie", age: "23" },
// ];

// const userObject = users.reduce((accumulator, current) => {
//   accumulator[current.id] = current.name;
//   return accumulator;
// }, {});

// console.log("Users as an object:", userObject);
// /*
// Output:
// Users as an object: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }
// */

//SLICE and SPLICE method

// const data = [1, 2, 3, 4, 5];

// const aftersliceresult = data.slice(1, 3); // first one is index second one is the index but not considerable , considering the just decrease value of the second index

// console.log("after slice the data array is:-", aftersliceresult);

// perform the splice method   ( add , remove , replace)
// const data1 = [1, 2, 3, 4, 5];

//remove the element
// const remove = data1.splice(1, 1);

// console.log("remove element:-", data1);

//add the element
// const add = data1.splice(1, 0, 101);

// console.log("remove element:-", data1);

//replace the element
// const replace = data1.splice(1, 1, 102);

// console.log("replace  element", data1);

//SPLIT TRIM & JOIN METHOD

// const inputString = "  Hello, how are you doing today?   ";

// // Split the string into words
// const words = inputString.split(" ");

// // Trim each word and filter out any empty strings
// const trimmedWords = words
//   .map((word) => word.trim())
//   .filter((word) => word !== "");

// // Join the trimmed words back into a single string
// const resultString = trimmedWords.join(" ");
// console.log("Final result string:", resultString);
// // Output: Final result string: "Hello, how are you doing today?"

//FIND
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const foundUser = users.find((user) => user.name === "Bob");

console.log("Found User:", foundUser);
// Output: Found User: { id: 2, name: "Bob" }

//FINDINDEX
const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex((number) => number === 30);

console.log("Index of 30:", index);
// Output: Index of 30: 2

//SOME
const ages = [18, 25, 30, 12];

// Check if there is at least one age that is less than 18
const hasUnderage = ages.some((age) => age < 18);

console.log("Is there someone underage?", hasUnderage);
// Output: Is there someone underage? true

//EVERY
const scores = [80, 90, 85, 95];

// Check if all scores are greater than 75
const allPass = scores.every((score) => score > 75);

console.log("Did everyone pass?", allPass);
// Output: Did everyone pass? true

// CONCAT
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = arr1.concat(arr2);

console.log("Combined array:", combined);
// Output: Combined array: [1, 2, 3, 4, 5, 6]

//INCLUDES
const fruits = ["apple", "banana", "mango"];

const hasBanana = fruits.includes("banana");

console.log("Does the array include 'banana'?", hasBanana);
// Output: Does the array include 'banana'? true

//SORT
const numbers1 = [3, 1, 4, 2, 5];

const sortedNumbers = numbers1.sort();

console.log("Sorted numbers:", sortedNumbers);
// Output: Sorted numbers: [1, 2, 3, 4, 5]

//SORT with custom comparator (descending order)
const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => b - a);

console.log("Sorted in descending order:", points);
// Output: Sorted in descending order: [100, 40, 25, 10, 5, 1]

//REVERCSE
const numbers2 = [1, 2, 300, 4, 5];

const reversedNumbers = numbers2.reverse();

console.log("Reversed numbers:", reversedNumbers);
// Output: Reversed numbers: [5, 4, 3, 2, 1]
