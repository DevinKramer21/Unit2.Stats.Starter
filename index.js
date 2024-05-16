// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "1,2,3,4,5"
  );
  
  // Spliting the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");
  
  // Converting the array of strings into an array of numbers.
  const numbers = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
  }
  
  // Peforming here some calculations on the numbers.
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
  
  // this should complete the functions below to make the program work!
  
  function getLength(numbers) {
    return numbers.length;
  }
  
  function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  function getMean(numbers) {
    return getSum(numbers) / numbers.length;
  }
  
  function getMin(numbers) {
    return Math.min(...numbers);
  }
  
  function getMax(numbers) {
    return Math.max(...numbers);
  }
  
  function getRange(numbers) {
    return getMax(numbers) - getMin(numbers);
  }
  
  function getEvens(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
  function getOdds(numbers) {
    return numbers.filter(num => num % 2 !== 0);
  }
  