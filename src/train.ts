// MIT TASK S 
function missingNumber(nums: number[]): number {
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }

    return -1;
}

const a = missingNumber([0, 1, 3]);
console.log("A:", a)




















// // MIT TASK R

// function calculate(input: string) {
//     let total = 0;

//     const numbers = input.split("+");

//     for (const number of numbers) {
//         total += Number(number);
//     }

//     return total;
// }

// const a = calculate("6 + 5 + 2");

// console.log("a:", a);

// function calculate(input: any) {
//     let total = 0;

//     for (const ele of input.split("+")) {
//         const num = Number(ele.trim());

//         if (!isNaN(num)) {
//             total += num;
//         }
//     }

//     return total;
// }

// const a = calculate("61 + 5 + 2");
// console.log("a:", a);

// // MIT TASK Q
// function hasProperty(input1: any, input2: any) {
//     return input2 in input1;
// }

// const a = hasProperty({ age: 30 }, "age");
// const b = hasProperty({ age: 30 }, "name");

// console.log("a:", a);
// console.log("b:", b);

// // MIT TASK P
// function objectToArray(object: any) {s
//     return Object.entries(object);
// }

// const result1 = objectToArray({ a: 10, b: 20, c: 30 });

// console.log(result1);

// function objectToArray1(object: object) {
//     const array = [];
//     const keys = Object.keys(object);
//     const values = Object.values(object);

//     for (let i = 0; i < keys.length; i++) {
//         array.push([keys[i], values[i]]);
//     }

//     return array;
// }

// const result2 = objectToArray({ a: 10, b: 20, c: 30 });

// console.log(result2);

// // MIT TASK O
// function calculateSumOfNumbers(numbers: any[]) {
//     let count: number = 0;
//     for(const ele of numbers ) {
//         // console.log(typeof(ele));
//         if(typeof(ele) === 'number') count += ele;
//     }
//     return count
// }

// const result1 = calculateSumOfNumbers([10, "10", {son: 10}, true, 23]);
// console.log("Result1:", result1)

// // MIT TASK N

// function palindromCheck(word: string) {
//     const new_word = word.split("");
//     const b = String(new_word.reverse().join(""));
//     if(word === b) return true; else return false
// }
// const a = palindromCheck("1234321");
// console.log(a)

// // MIT TASK M
// function getSquareNumbers(numbers: number[]) {
//     const newArray = [];

//     for (const ele of numbers) {
//         newArray.push({
//             number: ele,
//             square: ele * ele
//         });
//     }

//     return newArray;
// }

// const array1 = getSquareNumbers([3, 4, 6, 7, 9]);

// console.log("Array1:", array1);

// const array2 = getSquareNumbers([0, 1, 4, 2, 10]);

// console.log("Array2:", array2);

// PYTHON VERSION
// MIT TASK M
// def getSquareNumbers(numbers):
//     new_array = []
//     for ele in numbers:
//         new_array.append({f"number: {ele}, square: {ele * ele}"})
//     return new_array

// array1 = getSquareNumbers([3, 4, 6, 7, 9])
// print("Array1:", array1)

// MIT TASK L
// def reverseSentence(sentence):
//     new_array = []
//     new_input = sentence.split(" ")
//     for ele in new_input:
//         ele2 = reversed(ele)
//         final_ele = "".join(ele2)
//         new_array.append(final_ele)

//     return " ".join(new_array)

// result = reverseSentence('we like python!')
// print("Result:", result)

// def reverseSentence2(input):
//     new_array = []
//     new_input = input.split(" ")

//     for ele in new_input:
//         final_ele = "".join(reversed(ele))
//         new_array.append(final_ele)

//     return " ".join(new_array)

// result2 = reverseSentence2("we like coding!")
// print("Result2:", result2)
