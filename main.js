const utils = require("./utils.js");
const prompt = require("readline-sync");
console.log(
    utils.matrixProduct(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ],
            [
                [9, 8, 7],
                [6, 5, 4],
                [3, 2, 1],
            ]
        )
);
console.log(
        utils.sumOfMatrices(
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ],
            [
                [9, 8, 7],
                [6, 5, 4],
                [3, 2, 1],
            ]
        )
);
console.log(
        utils.sumOfEachRow([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ])
);
console.log("\n");
const sentence = prompt.question(
    "Insert the sentence to see the word count.\n"
);
console.log("The word count is: " + utils.countWords(sentence));
const string = prompt.question("Insert the string that needs to be trimmed.\n");
console.log("The trimmed string is: " + utils.trim(string));
