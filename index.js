// challenge 1 "fundamental p-1"
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
// Your task is to write some code to help them:
// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
// Log the value of BMIMark and BMIJohn to the console.
// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark );
const BMIJohn = massJohn / (heightJohn * heightJohn );
console.log(BMIMark,BMIJohn);
const markHigherBMI  = BMIMark > BMIJohn ;
console.log(markHigherBMI);

// challenge 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉
*/
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const BMIMark1  = massMark / (heightMark * heightMark);
const BMIJohn1 = massJohn / (heightJohn * heightJohn);
if(BMIMark > BMIJohn )
{
    console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})!`);
}
else
{
    console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})!`)
}

// challenge 3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let scoreDolphins =  (96 + 108 + 89) / 3 ;
let scoreKoalas  =  (88 + 91 + 110) / 3 ;

if(scoreDolphins > scoreKoalas) console.log(`Dolphins win the trophy`);
else if(scoreKoalas > scoreDolphins) console.log(`trophy win the Dolphins`);
else console.log(`Both win the trophy`);

// chalenge 4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
let bill = 430
const tip = (bill >= 50 && bill <= 300) ? bill * (15/100) :  bill * (20/100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip }.`)


// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
let arr = [0,-1,4]
let count = arr.sort().reverse()
console.log((count.join(",")))

// "fundamental p-2 challenge1"

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins1 = calcAverage(44, 23, 71);
let scoreKoalas2 = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);


// challenge 2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

let bills = [125, 555,44];

let calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ?  bill * (15 / 100) :  bill * (20 / 100);
}

let tips = [];
let totals = [];

tips.push(calcTip(bills[0]));
totals.push(bills[0] + tips[0]);
tips.push(calcTip(bills[1]));
totals.push(bills[1] + tips[1]);
tips.push(calcTip(bills[2]));
totals.push(bills[2] + tips[2]);
console.log(tips)


// challenge 3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

// challenge 4 

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/


const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
  const tip1 = calcTip1(bills1[i]);
  tips1.push(tip1);
  totals.push(tip1 + bills1[i]);
}
console.log(bills1, tips1, totals1);

const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage1([2, 3, 7]));
console.log(calcAverage1(totals));
console.log(calcAverage1(tips));


// function w3reasource
// Write a JavaScript function that returns array elements larger than a number.
// Define a function named BiggerElements that returns a filtering function
function BiggerElements(val) {
  // Return a filtering function that checks if the array element is greater than or equal to the given value (val)
  return function(evalue, index, array) {
     return (evalue >= val);
  };
}

// Create an array named result by filtering elements greater than or equal to 10 using BiggerElements(10)
var result = [11, 45, 4, 31, 64, 10].filter(BiggerElements(10));

// Log the filtered array to the console
console.log(result); 

// Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[1,2],[1,3],[2,3]]

// Function to get all possible subsets with a fixed length
function getSubsetsWithLength(arr, length) {
  const result = [];

  // Recursive function to generate subsets
  function generateSubsets(currentSubset, start) {
      if (currentSubset.length === length) {
          result.push([...currentSubset]); // Add a copy of the currentSubset to the result
          return;
      }

      for (let i = start; i < arr.length; i++) {
          currentSubset.push(arr[i]);
          generateSubsets(currentSubset, i + 1);
          currentSubset.pop();
      }
  }

  generateSubsets([], 0);
  return result;
}

// Example usage:
const inputArray = [1, 2, 3];
const subsetLength = 2;
const resultSubsets = getSubsetsWithLength(inputArray, subsetLength);

// Log the result to the console
console.log(resultSubsets);


// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

// Define a function named find_FirstNotRepeatedChar that finds the first non-repeated character in a given string
function find_FirstNotRepeatedChar(str) {
  // Convert the input string into an array of characters
  var arra1 = str.split('');
  
  // Initialize variables result and ctr for storing the result and counting character occurrences
  var result = '';
  var ctr = 0;
 
  // Iterate through each character in the array
  for (var x = 0; x < arra1.length; x++) {
    // Reset the counter (ctr) for each character
    ctr = 0;
 
    // Iterate through the array again to count occurrences of the current character
    for (var y = 0; y < arra1.length; y++) {
      // Check if the current character is equal to the character at position y
      if (arra1[x] === arra1[y]) {
        // If true, increment the counter (ctr)
        ctr += 1;
      }
    }
 
    // Check if the counter (ctr) is less than 2 (character occurs only once)
    if (ctr < 2) {
      // If true, assign the current character to the result and break out of the loop
      result = arra1[x];
      break;
    }
  }
  
  // Return the first non-repeated character found
  return result;
}

// Log the result of calling find_FirstNotRepeatedChar with the input string 'abacddbec' to the console
console.log(find_FirstNotRepeatedChar('abacddbec')); 


// Write a JavaScript function to find the longest substring in a given string without repeating characters.
// Function to find the longest substring without repeating characters
function longest_substring_without_repeating_characters(input) {
  // Split the input string into an array of characters
  var chars = input.split('');
  var curr_char;
  var str = "";
  var longest_string = "";
  var hash = {};

  // Loop through each character in the input string
  for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];

    // Check if the character is not already in the hash table
    if (!hash[chars[i]]) { 
      // Add the character to the current substring
      str += curr_char; 
      // Update the hash table with the character and its index
      hash[chars[i]] = {index:i};
    } else {
      // If there's a repeating character, compare lengths and update if necessary
      if (longest_string.length <= str.length) {
        longest_string = str;
      }
      // Get the index of the previous occurrence of the repeating character
      var prev_dupeIndex = hash[curr_char].index;
      // Extract the substring from the previous occurrence to the current index
      var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
      // Update the current substring with the new non-repeating characters
      str = str_FromPrevDupe + curr_char;
      // Reset the hash table for the new substring
      hash = {};
      // Update the hash table with the characters and their indices in the new substring
      for (var j = prev_dupeIndex + 1; j <= i; j++) {
        hash[input.charAt(j)] = {index:j};
      }
    }
  }

  // Return the longest substring (either the current substring or the previously found longest)
  return longest_string.length > str.length ? longest_string : str;
}

// Example usage:
console.log(longest_substring_without_repeating_characters("google.com")); 
console.log(longest_substring_without_repeating_characters("example.com"));  


 /* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);