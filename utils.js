function matrixProduct(mat1, mat2) {
    let result = [];

    //loop for c in mat1[c][x] and result[c][x]
    for (let c = 0; c < mat1.length; c++) {
        let row = [];

        //loop for b in result[c][b] and mat2[x][b]
        for (let b = 0; b < mat2[0].length; b++) {
            let el = 0;

            //loop for a in mat1[c][a] and mat2[a][b]
            for (let a = 0; a < mat1[0].length; a++) {
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
        for (let c = 0; c < mat1[0].length; c++) {
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
        result.push(sumOfArray(mat[r]));
    }
    return result;
}

function sumOfArray(arr) {
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
    for (let n = 0; n < str.length; n++) {
        if (isWord === 0 && str[n] !== " ") {
            count++;
            isWord = 1;
        }
        if (str[n] === " ") {
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
            traili = i + 1;
            break;
        }
    }
    return str.slice(leadi, traili);
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
    countWords,
    trim
};
