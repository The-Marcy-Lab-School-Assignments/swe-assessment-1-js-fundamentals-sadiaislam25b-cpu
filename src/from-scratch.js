/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
/*
- each one of these if conditionals needs a closing curly brace
- You don't need to write a new function within the petJudger function
- You need to use the petBreed argument within the function petJudger.
- Use else if or check multiple animals(petBreed) separately:

*/
// ============================================

const petJudger = (petBreed, petName) => {
  function isGoodBreed(breed) {
    const goodBreeds = ['dog', 'cat', 'turtle', 'snake'];
    return goodBreeds.includes(breed.toLowerCase());
  }

  if (isGoodBreed(dog)) {
    return `${petName} I love dongs!`;
    if (isGoodBreed(cat)) {
      return `${petName} I love cats!`;
      if (isGoodBreed(turtle)) {
        return `${petName} I love turtles!`;
        if (isGoodBreed(snake)) {
          return `${petName} I love snakes!`;
        } else {
          return `${petName} I am not a fan of ${petBreed}s.`;
        }
      };

      // ============================================
      // Question 2: loopFromOneUpToAnother
      // ============================================

      const loopFromOneUpToAnother = (firstNum, secondNum) => {
        let result = [];
        for (let i = firstNum; i <= secondNum; i++) {
          result.push(i);
        }
        return result;
      };

      // ============================================
      // Question 3: shoutEveryLetterForLoop
      /*
      - This solution is very close, but this function exected for each caharcter to be logged to the console sperately. Here you are adding each character to a string. 
      */ ============================================

      const shoutEveryLetterForLoop = (str) => {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          result += str[i].toUpperCase() + '!';
        }
        return result;
      };

      // ============================================
      // Question 4: letterCaseCounts
      // ============================================

      const letterCaseCounts = (str) => {
        let counts = { uppercase: 0, lowercase: 0, neither: 0 };
      };

      // ============================================
      // Question 5: getNamesOfGreedyGnomes
      // ============================================

      const getNamesOfGreedyGnomes = (gnomes) => {
        let greedyGnomeNames = [];
      };

      // ============================================
      // Exports
      // ============================================

      module.exports = {
        petJudger,
        loopFromOneUpToAnother,
        shoutEveryLetterForLoop,
        letterCaseCounts,
        getNamesOfGreedyGnomes,
      };
