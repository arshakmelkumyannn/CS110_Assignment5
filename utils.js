function matrixProduct(mat1, mat2) {
    let result = [];

    for (let c = 0; c < mat1.length; c++) {
        let row = [];

        for (let b = 0; b < mat2[c].length; b++) {
            let el = 0;

            for (let a = 0; a < mat1[c].length; a++) {
                el += mat1[c][a] * mat2[a][b];
            }
            row.push(el);
        }
        result.push(row);
        
    }
    return result;
}

// mat1: a1 a2 mat2: b1 b2 Result: (a1*b1 + a2*b3) (a1*b2 + a2*b4)
//       a3 a4       b3 b4         (a3*b1 + a4*b3) (a3*b2 + a4*b4)

function sumOfMatrices(mat1, mat2) {
    let result = [];

    for (let r = 0; r < mat1.length; r++) {
        let row = [];

        for (let c = 0; c < mat1[r].length; c++) {
            let el = mat1[r][c] + mat2[r][c];

            row.push(el);
        }

        result.push(row);
    }

    return result;
}

// mat1: a1 a2 mat2: b1 b2 Result: (a1+b1) (a2+b2)
//       a3 a4       b3 b4         (a3+b3) (a4+b4)

function sumOfEachRow(mat) {
    let result = [];

    for (let r = 0; r < mat.length; r++) {
        result.push(_sumOfArray(mat[r]));
    }

    return result;
}

function _sumOfArray(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

function countWords(str) {
    let newStr = " " + str;
    let count = 0;
    let isWord = 0;

    for (let n = 0; n < newStr.length; n++) {
        if (isWord === 0 && newStr[n] !== " ") {
            count++;
            isWord = 1;
        }
        if (newStr[n] === " ") {
            isWord = 0;
        }
    }

    return count;
}

function trim(str) {
    let leadi = 0;
    let traili = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            leadi = i;
            break;
        }
    }
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            traili = i;
            break;
        }
    }

    return str.slice(leadi, traili + 1); 
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
    countWords,
    trim
};
