// MIT TASK N

function palindromCheck(word: string) {
    const new_word = word.split("");
    const b = String(new_word.reverse().join(""));
    if(word === b) return true; else return false
}
const a = palindromCheck("1234321");
console.log(a)









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
