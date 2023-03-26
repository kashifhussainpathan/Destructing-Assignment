// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 7, 2, 8, 1, 3, 5, 4, 5, 7, 8, 9, 4, 5, 9, 7, 2, 12];

function removeDuplicates(numbers) {
    const uniqueNumbersSet = new Set(numbers);
    console.log(uniqueNumbersSet)
    return [...new Set(numbers)];
}
const uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers);