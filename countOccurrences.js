const longString = " You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces. ";

function wordCount(string) {
    const words = string.split(" ");
    const countMap = new Map();
    for (const word of words) {
        const count = countMap.get(word) || 0;
        countMap.set(word, count + 1);
    }
    return countMap;
}
const result = wordCount(longString);
console.log(result);