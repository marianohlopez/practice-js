


/*     const newArr1 = arr1.sort((a, b) => a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1);
    const newArr2 = arr2.sort((a, b) => a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1);
    newArr1.forEach((element, index) => {

        if (element[1] == newArr2[index][1]) {
            let newQuantity = element[0] + newArr2[index][0]
            const newElement = [newQuantity, newArr2[index][1]]
            newArray.push(newElement)
        } else {
            newArray.push(element);
            newArray.push(newArr2[index]);
        }

    });

    return newArray; */


/* function getWhiteLightLength(n, m, lights) {
    let whiteLightPositions = 0;
 
    // Iterar sobre todas las posibles combinaciones de luces
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (j === i) continue;
            for (let k = 1; k <= 3; k++) {
                if (k === i || k === j) continue;
 
                // Verificar si esta combinación forma luz blanca en algún punto del escenario
                let covered = new Array(n).fill(false);
                for (let l = 0; l < m; l++) {
                    let { color, left, right } = lights[l];
                    if (color === i || color === j || color === k) {
                        for (let x = left - 1; x < right; x++) {
                            covered[x] = true;
                        }
                    }
                }
                if (covered.every((val) => val === true)) {
                    // Si todas las posiciones están cubiertas, entonces esta combinación forma luz blanca
                    whiteLightPositions += covered.filter((val) => val === true).length;
                }
            }
        }
    }
 
    return whiteLightPositions;
 
} */




/* function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz");
        }
        if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        }
        if (i % 3 !== 0 && i % 5 !== 0) {
            console.log("i");
        }
    }
} */


/* function countingValleys(steps, path) {
    let count = 0;
    let valleys = 0;
    path.split("").forEach(element => {
        element === "U" ? count++ : count--
        if (count === 0 && element === "U") valleys++
    });
    return valleys
}
 
const ex = "UDUUUDUDDD"
 
console.log(countingValleys(8, ex)); */




/* function pageCount(n, p) {
    // calculate the number of page turns starting from the front
    const turnsFromFront = Math.floor(p / 2);
 
    // calculate the number of page turns starting from the back
    const turnsFromBack = Math.floor(n / 2) - turnsFromFront;
 
    // return the minimum number of page turns
    return Math.min(turnsFromFront, turnsFromBack);
}
 
console.log(pageCount(6, 5)); */




/* //funcion con frecuencia, uso de objeto
function sockMerchant(n, ar) {
    let freq = {};
    let pairs = 0;
 
    for (let i = 0; i < n; i++) {
        if (freq[ar[i]]) {
            freq[ar[i]]++;
        } else {
            freq[ar[i]] = 1;
        }
    }
 
    for (let key in freq) {
        pairs += Math.floor(freq[key] / 2);
    }
 
    return pairs;
}
 
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(9, ar)); */




/* function bonAppetit(bill, k, b) {
    let totalBill = bill.reduce((acc, item) => acc + item, 0)
    totalBill = (totalBill - bill[k]) / 2;
    console.log(totalBill === b ? "Bon Appetit" : b - totalBill);
}
 
const bill = [72, 53, 60, 66, 90, 62, 12, 31, 36, 94];
const k = 6;
const b = 288;
 
bonAppetit(bill, k, b); */



/* function migratoryBirds(arr) {
    let largest
    let counter = largest;
    let type = 0;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        largest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
        if (largest > counter) {
            counter = largest;
            type = arr[i];
        }
    }
    return type;
 
 
}
let obj = { o: 1 }
obj["o"]++
//console.log(obj["o"]);
const example = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
example.sort()
 
const findDuplicate = example.filter((item, index) => example.indexOf(item) !== index); */



/* function divisibleSumPairs(n, k, ar) {
    let count = 0;
 
    for (let i = 0; i < n; i++) {
        ar.slice(i + 1).filter((item) => {
            if ((item + ar[i]) % k === 0) {
                count++
            }
        })
    }
 
    return count
}
 
const ar = [13, 91, 5, 100, 5, 12, 5, 79, 99, 87, 59, 65, 62, 73, 93, 73, 63, 65, 59,
    46, 67, 35, 22, 55, 50, 53, 38, 79, 75, 44, 95, 53, 5, 73, 44,
    94, 95, 21, 60, 2, 32, 48, 72, 13, 91, 74, 79, 99, 17, 31, 53, 20,
    88, 17, 54, 47, 56, 79, 23, 49, 95, 81, 9, 50, 12, 20, 45, 82, 44, 82, 93,
    15, 73, 51, 65, 96, 4, 77, 37, 41, 30, 11, 65, 100, 62, 51, 64, 48, 12, 11,
    68, 81, 46, 37, 10, 46, 75, 82, 21, 23]
const k = 40
const n = 100
console.log(divisibleSumPairs(n, k, ar)); */
/* function birthday(s, d, m) {
    let array = [];
    let count = 0;
    s.forEach(el => {
        array.push(el)
        if (array.length === m) {
            if (array.reduce((a, b) => a + b) === d) {
                count++;
                array.splice(0, 1);
            } else {
                array.splice(0, 1);
            }
        }
    });
    return count;
}
 
const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const d = 18;
const m = 7;
//console.log(s.splice(0, 1));
console.log(birthday(s, d, m)); */

/* function getTotalX(a, b) {
    let count = 0;
    for (let i = 0; i <= Math.max(...b); i++) {
        if (a.every((item) => i % item === 0)) {
            if (b.every((item) => item % i === 0)) {
                count += 1
            }
        }
    }
    return count;
}
 
const example = [2, 4]
const example2 = [16, 32, 96]
 
console.log(getTotalX(example, example2)); */

/* function kangaroo(x1, v1, x2, v2) {
    return v2 < v1 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}
 
const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2; */


/* function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const appleArray = apples.map(element => {
        return element + a;
    });
    const orangeArray = oranges.map(element => {
        return element + b;
    });
    const samApples = appleArray.filter((el) => el >= s && el <= t).length;
    const samOranges = orangeArray.filter((el) => el >= s && el <= t).length;
    console.log(samApples);
    console.log(samOranges);
}
 
const s = 7;
const t = 10;
const a = 4;
const b = 12;
const apples = [2, 3, -4]
const oranges = [3, -2, -4]
 
countApplesAndOranges(s, t, a, b, apples, oranges) */

/* function gradingStudents(grades) {
    const array = [];
    grades.forEach(element => {
        if (element < 38) { array.push(element) }
        else {
            let newGrades = element
            while (newGrades % 5 !== 0) {
                newGrades++
            }
            if (newGrades - element < 3) {
                array.push(newGrades);
            } else {
                array.push(element)
            }
        }
    })
    return array
}
 
const example = [73, 67, 38, 33]
console.log(gradingStudents(example));
 */
/* function timeConversion(s) {
    const newArray = s.split(":")
    if (s.includes("PM") && newArray[0] !== "12") {
        const newNumber = Number(newArray[0]) + 12
        newArray.shift()
        newArray.unshift(newNumber)
    }
    if (s.includes("AM") && newArray[0] === "12") {
        const newNumber = (Number(newArray[0]) - 12).toString().padStart(2, "0")
        newArray.shift()
        newArray.unshift(newNumber)
    }
    return newArray.join(":").replace(/(AM|PM)/, "")
}
 
const example = "12:05:45PM";
const example2 = "12:40:22AM"
console.log(timeConversion(example2)); */
/* function birthdayCakeCandles(candles) {
    let max = candles.reduce((a, b) => Math.max(a, b));
    return candles.filter((el) => el === max).length;
}
 
const example = [3, 2, 1, 3];
console.log(birthdayCakeCandles(example)); */


/* function miniMaxSum(arr) {
    let minSum = Infinity;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const sum = arr.reduce((acc, el) => acc + el, 0)
        let prevSum = sum - arr[i]
        if (prevSum < minSum) {
            minSum = prevSum
        }
        if (prevSum > maxSum) {
            maxSum = prevSum
        }
    }
    console.log(minSum, maxSum);
}
const example = [1, 2, 3, 4, 5]
 
miniMaxSum(example) */
/* function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }
}
 
staircase(4) */

/* function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach(element => {
        if (Math.sign(element) === 1) {
            positive++;
        } else if (Math.sign(element) === -1) {
            negative++;
        } else {
            zero++;
        }
    });
    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}
 
const example = [1, 1, 0, -1, -1]
 
console.log(plusMinus(example)); */
/* function diagonalDifference(arr) {
    let diag1 = 0
    let diag2 = 0
    for (let i = 0; i < arr.length; i++) {
        diag1 += arr[i][i]
        diag2 += arr[arr.length - 1 - i][i]
    }
    return Math.abs(diag1 - diag2);
}
 
const example = [11, 2, 4][4, 5, 6][10, 8, -12]
 
console.log(diagonalDifference(example)); */
//console.log(Math.abs(5 - 4));

/* const reverse = a => {
    const array = []
    a.forEach(element => {
        array.unshift(element)
    });
    return array
}
 
const example = [1, 2, 3]
console.log(reverse(example)); */

/* function generateHashtag(str) {
    const array = [];
    str.split(" ").forEach(element => {
        if (element !== "")
            array.push(element.charAt(0).toUpperCase() + element.slice(1))
    });
    if (array.length !== 0 && array.join("").length < 140) {
        array.unshift("#");
        return array.join("")
    } else {
        return false;
    }
}
 
const example = " Hello there thanks for trying my Kata";
const example2 = "    Hello     World   ";
const example3 = "";
 
console.log(generateHashtag(example)); */


/* function toUnderscore(string) {
        string.split("").map((el) => {
            if (el === el.toUpperCase() && el === string[0]) {
                el.toLowerCase();
            }
        })
    let newString
    let newString2
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            console.log(string.indexOf(i));
            //newString = string.split("")[string.indexOf(i)];
        }
    }
    //return newString
}
//https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
const example = "TestController"
console.log(toUnderscore(example)); */
/* function domainName(url) {
    let index;
    let indexFinal;
    if (url.includes("www")) {
        index = url.indexOf("www") + 4
    } else if (url.includes("/") && url.includes("http")) {
        index = url.indexOf("/") + 2
    } else {
        index = 0
    }
    indexFinal = url.slice(index).indexOf(".") + index;
    return url.slice(index, indexFinal);
}
 
const urlEx = "http://github.com/carbonfive/raygun";
const urlEx2 = "http://www.zombie-bites.com";
const urlEx3 = "http://google.co.jp"
const urlEx4 = "mu12jc6uhde26lv-kb4pyf.tv/warez/"
//console.log(urlEx3.indexOf("."));
//console.log(urlEx2.slice(11).indexOf("."));
console.log(urlEx.split('.')[0]);
 */

/* function scramble(str1, str2) {
    let strComp = ""
    let string = str1.split("")
    for (let i = 0; i < str2.length; i++) {
        if (string.includes(str2[i])) {
            strComp += str2[i]
            string.splice(string.indexOf(str2[i]), 1)
        }
    }
    if (strComp === str2) {
        return true
    } else {
        return false
    }
}
 
//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
const ex1 = 'scriptingjava';
const ex2 = 'javascript';
console.log(scramble('scriptingjava', 'javascript')); */
//let ja = ex2.split("")
//ja.splice(3, 1)
//console.log(ja);
/* function rot13(str) {
    const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    let code = "";
    for (let i = 0; i < str.length; i++) {
        const index = input.indexOf(str[i]);
        index === -1 ? code += str[i] : code += output[index];
    }
    return code;
}
const example = 'zr dhvreb ve'
console.log(rot13(example)); */
//let ja = p.split("").replace(["a", "b"], ["X", "X"])


/* function orderWeight(strng) {
    const array = strng.split(" ");
    array.forEach(element => {
        console.log(element.split(""));
    });
}
 
const example = "56 65 74 100 99 68 86 180 90";
 
console.log(orderWeight(example)); */

//https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

/* function cakes(recipe, available) {
    const arr = [];
    const arr2 = [];
 
    [recipe].forEach(element => {
        arr.push(element)
    })
    let keys1 = Object.keys(recipe);
    return keys1.map((key) => Object.fromEntries([key, recipe[key]]));
}
 
 
 
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
 */
/* function humanReadable(seconds) {
    var pad = function (x) { return (x < 10) ? "0" + x : x; }
    return pad(parseInt(seconds / (60 * 60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}
 
function humanReadable(seconds) {
    let min = Math.floor(seconds / 60);
    let hour = Math.floor(seconds / 3600);
    if (min < 10) {
        min = "0" + min;
    } else if (min % 60 === 0) {
        min = "00"
    } else if ((min % 60) < 10) {
        min = "0" + min % 60;
    } else if (min > 59) {
        min = min % 60
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    } else if (seconds % 60 === 0) {
        seconds = "00"
    } else if ((seconds % 60) < 10) {
        seconds = "0" + seconds % 60;
    } else if (seconds > 59) {
        seconds = seconds % 60
    }
    return `${hour}:${min}:${seconds}`;
}
 
console.log(humanReadable(177725)); */

/* function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt(0)) {
            return String.fromCharCode(first + i)
        }
    }
    throw new Error("Invalid input")
}
 
let STRING = "O,P,Q,R,S"
const example = ['O', 'Q', 'R', 'S']
const example2 = ["b", "c", "d", "f"]
const example3 = ['O', 'Q', 'R', 'S']
function findMissingLetter(array) {
    const ar = []
    const alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
    const array2 = array.map(el => el.toUpperCase())
    let index = alphabet.split(",").findIndex(el => el === array2[0])
    let finalIndex = alphabet.split(",").findIndex(el => el === array2[array2.length - 1]) + 1
    const newAlphabet = alphabet.split(",").slice(index, finalIndex)
    newAlphabet.forEach(element => {
        if (!array2.includes(element)) { ar.push(element) };
    });
    if (array[0] === array[0].toLowerCase()) {
        return ar[0].toLowerCase()
    }
    else {
        return ar[0].toUpperCase();
    }
}
let index = alphabet.split(",").findIndex(el => el === example[0])
let finalIndex = (alphabet.split(",").findIndex(el => el === example[example.length - 1])) + 1
//console.log(alphabet.split(",").splice(1, 3));
const ex = alphabet.split(",").slice(index, finalIndex)
console.log(findMissingLetter(example3)); */
/* var maxSequence = function (arr) {
    let currentSum = 0;
    let maxSum = 0;
    const negativeNumb = []
    if (arr.length === 0) {
        return 0
    }
    arr.forEach(a => {
        if (Math.sign(a) === -1) {
            negativeNumb.push(a);
        }
        currentSum = Math.max(a, currentSum + a)
        maxSum = Math.max(maxSum, currentSum)
    })
    if (arr.length === negativeNumb.length) {
        return 0
    } else {
        return maxSum
    }
}
 
let arrayEx = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
 
console.log(maxSequence(arrayEx)); */
//console.log(Math.sign(-3));
/* function moveZeros(arr) {
    const array1 = [];
    const array2 = [];
    arr.forEach(element => {
        if (element !== 0) {
            array1.push(element)
        } else {
            array2.push(element)
        }
    });
    return array1.concat(array2);
}
 
const arrayExample = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
 
console.log(moveZeros(arrayExample)); */
/* function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0 && flower2 % 2 === 1) || (flower2 % 2 === 0 && flower1 % 2 === 1)) {
        return true
    } else {
        return false
    }
 
}
 
let flo1 = 5;
let flo2 = 2;
 
console.log(lovefunc(flo1, flo2)); */

/* function getMiddle(s) {
    if (s.length % 2 === 0) {
        let number = s.length / 2;
        return `${s[number - 1]}${s[number]}`
    } else {
        let number = (s.length - 1) / 2;
        return `${s[number]}`
    }
}
 
let string = "testing"
console.log(getMiddle(string)); */
/* function printerError(s) {
    let restAlphabet = 'nopqrstuvwxyz';
    let error = 0
    const array = s.split("");
    array.forEach(element => {
        if (restAlphabet.split("").includes(element)) {
            error++;
        }
    })
    return `${error}/${s.length}`;
} */
/* function printerError(s) {
    // your code
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return count + "/" + s.length;
}
 
let x = "aaaxbbbbyyhwawiwjjjwwm"
 
console.log(printerError(x)); */

/* function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
 
console.log(rowSumOddNumbers(2)); */

/* function highAndLow(numbers) {
    const list = []
    let array = numbers.split(" ")
    array.forEach(element => {
        let newNumber = Number(element)
        list.push(newNumber)
    })
    return `${Math.max(...list)} ${Math.min(...list)}`
}
 
"1 2 3 4 5"
console.log(highAndLow("1 2 3 4 5"));
const ja = [1, 2, 3, 4, 5] */
//console.log(Math.min(...ja));

/* function findMultiples(integer, limit) {
    const list = [];
    for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            list.push(i)
        };
    }
    return list
}
console.log(findMultiples(12, 93)); */


/* const numb = [3, "4", 5]
let sum = 0;
 
numb.forEach(element => {
    let newNumber = Number(element)
    sum += newNumber
})
 
console.log(sum);; */

//console.log(parseInt(...numb));

/* const a = [1, 2, 3]
const b = [3, 2, 1]
 
const index = 0
 
const sum = () => {
    let ja = "mas grande"
    a.forEach(element => {
        if (b[index] > element) {
 
            console.log(ja);
        }
    });
}
 
console.log(sum()); */

/* const sheeps = [
    {
        name: "Noah",
        color: "blue"
    },
    {
        name: "Euge",
        color: "red"
    },
    {
        name: "Ki Na Ma",
        color: "red"
    }
]
 
let arrayname = [
    "noah", "blue", "Euge", "red",
    "Ki Na Ma", "red"
] */
/* const arrayLetters = []
 
const find = (array) => {
    array.map(element => {
        console.log({ name: element.name.split("") });
    }); 
    let hola
    array.forEach((element) => {
        let item = element.name.split("")
        if (item.some((el) => (el === "n") || (el === "N")) && element.color === "blue") {
 
            item.join("")
            console.log(item.join(""));
            hola = item.join("")
        }
    });
    return hola
 
 
 
} */



/* let prueba = find(sheeps)
console.log(prueba); */
//find(sheeps);
//find(sheeps);



/* import fetch from "node-fetch";
 
const update = {
    title: 'test',
    price: 345.67,
    thumbnail: 'https://www.shutterstock.com/image-vector/school-measuring-plastic-ruler-20-260nw-615662024.jpg'
}
 
const poner = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/productos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    })
    const newData = await fetch("http://127.0.0.1:3000/api/productos")
    const data = await newData.json();
    console.log(data);
}
 
 
 
const traer = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/productos")
    const data = await response.json();
    console.log(data);
}
 
poner() */

/* var str = ['ab', 'ab', 'bca', 'acb']
var quer = ['ab', 'abc', 'bc']
function matchingStrings(strings, queries) {
 
    return queries.map(x => strings.filter(y => y === x).length)
 
}
console.log(matchingStrings(str, quer)); */
;

/* class Jugador{
    constructor(nombre, numeroDeCamiseta, edad, lesionado){
        this.nombre = nombre;
        this.numeroDeCamiseta = numeroDeCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

const equipo = [];

equipo.push(new Jugador("carlos", 19, 18, "si")) 
equipo.push(new Jugador("mariano", 10, 25, "no")) 
equipo.push(new Jugador("alberto", 8, 32, "si")) 

console.log(equipo);

function filtroJugadores(equipo, edad){
    let jugador = equipo.filter(item => item.edad === edad);
    let lista = ""
    for(item of jugador){
        lista += "jugador " + item.nombre + " numero " + item.numeroDeCamiseta + " edad " + item.edad
    }
    return lista;
}

console.log(filtroJugadores(equipo, 18));

for (let index = 0; index < 5; index++) {
    let entrada = filtroJugadores(equipo, parseInt(prompt("ingrese edad del jugador")));
    if(entrada != undefined){
        alert("la edad coincide con " + entrada);
    }else{
        alert("no coincide");
    }
    
} */


/* function buscarJugador(equipo, jugador){
    return equipo.find(item => item.nombre === jugador);
}

for (let index = 0; index < 3; index++) {
    let entrada = prompt("ingrese nombre de jugador");
    if(buscarJugador(equipo, entrada)){
        alert("el jugador "+ buscarJugador(equipo, entrada).nombre + " se encuentra en el equipo " + " y su camiseta es " + buscarJugador(equipo, entrada).numeroDeCamiseta);
    }else{
        alert("el jugador no se encuentra en el equipo")
    }
}
 */


/* const jugadores = [];

let entrada = prompt("ingrese nombre de jugador").toUpperCase();
while(entrada != "ESC"){
    jugadores.push(entrada);
    entrada = prompt("ingrese nombre de jugador").toUpperCase();
}
for (let index = 0; index < jugadores.length; index++) {
    alert("posicion " + index + " jugador " + jugadores[index]);
}
 */



/* const equipo = ['HOMERO', 'APU', 'MOE', 'MR. BURNS'];
for (let index = 0; index < equipo.length; index++) {
    alert("POSICION " + index + " JUGADOR " + equipo[index]);
} */



/* const validacion = (cadena) => {
    return cadena != '';
}
let entrada = prompt("ingrese texto").toUpperCase();

while (entrada != "ESC") {
    alert(validacion(entrada));
    entrada = prompt("ingrese texto").toUpperCase();
} */



/* const redondear = (valor) => {return Math.round(valor)}
let mensaje = ""

for (let index = 0; index < 5; index++) {
    let numero = redondear(parseFloat(prompt("ingrese numero")));
    mensaje += "el numero redondeado es " + numero + "\n";
}
alert(mensaje) */



/* class Cliente {
    constructor(nombre, presupuesto, targetaDeDescuento, telefono){
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.targetaDeDescuento = targetaDeDescuento;
        this.telefono = telefono;
    }
    transferirDinero(valor){
        if((this.presupuesto > 0)&&(valor < this.presupuesto)){
            this.presupuesto -= valor;
            return valor
        }else{
            return 0;
        }
    }
}

const cliente1 = new Cliente("Alberto", "100", "si", 45899658);
const cliente2 = new Cliente("Mariano", "200", "si", 45899658);
const cliente3 = new Cliente("Juan", "300", "no", 45899658);


for (let index = 0; index < 5; index++) {
    let entrada = parseFloat(prompt("INGRESAR MONTO"));
    if (cliente1.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada+" y le sobran "+cliente1.presupuesto);
    }
    if (cliente2.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada+" y le sobran "+cliente2.presupuesto);
    }
    if (cliente3.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada+" y le sobran "+cliente3.presupuesto);
    }
} */



/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora){
        if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
            return true;
        }
        return false;
    }
    esPropietario(nombre){
        return this.propietario == nombre;
    }
}

const tienda1 = new Tienda("Cafe", "ciudad de la paz 300", "Mariano", "cafeteria");
const tienda2 = new Tienda("Parrilla", "Irigoyen 437", "Carlos", "Gastronomia");
const tienda3 = new Tienda("Farmacia", "ciudad de la paz 100", "Alberto", "Farmacia");

for (let index = 0; index < 5; index++) {
    let entrada = prompt("Ingresar nombre de propietario");
    if(tienda1.esPropietario(entrada)){
        alert("Su nombre coincide con el propietario de la tienda 1");
    }else if(tienda2.esPropietario(entrada)){
        alert("Su nombre coincide con el propietario de la tienda 2");
    }else if(tienda3.esPropietario(entrada)){
        alert("Su nombre coincide con el propietario de la tienda 3");
    }else{
        alert("Error: su nombre no coincide con ninguno");
    }
} */




/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora){
        if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
            return true;
        }
        return false;
    }
}

const tienda1 = new Tienda("Cafe", "ciudad de la paz 300", "Mariano", "cafeteria")

for (let index = 0; index < 3; index++) {
    let horario = parseInt(prompt("ingrese horario"));
    if(tienda1.estaAbierto(horario)) {
        alert("la tienda esta abierta a las "+ horario);
    }else{
        alert("la tienda esta cerrada a las "+ horario);
    }
} */


/* class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora){
        if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
            return true;
        }
        return false;
    }
}
const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");
for (let index = 0; index < 3 ; index++) {
    let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
    if(tienda4.estaAbierto(entrada)){
        alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
    }else{
        alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
    }
}
 */









/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

let ingresados = ""

for (let index = 0; index < 5; index++) {
    const tienda = new Tienda(prompt("Nombre"), prompt("direccion"), prompt("propietario"), prompt("rubro"));
    ingresados += "Tienda: "+ tienda.nombre + " " + "Direccion "+ tienda.direccion + "Propietario: "+tienda.propietario+" "+
    "rubro: "+tienda.rubro+"\n";
}
alert(ingresados); */



/* const tienda1 = new Tienda("cafeMartinez", "libertador 658", "eduardo", "gastronomia");
const tienda2 = new Tienda("tiendaDeCafe", "ciudad de la paz 500", "mariano", "gastronomia");
const tienda3 = new Tienda("parrilla", "ciudad de la paz 800", "Carlos", "gastronomia");

console.log(tienda1); */



/* function impuesto(precio, porcentaje){
    return precio + (precio * porcentaje)/100
}
for (let index = 0; index < 5; index++) {
    let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO"))
  ,parseFloat(prompt("INGRESAR %")));
    alert(resultado);
}
 */


/* function impuesto (precio, porcentaje) {
    return precio + porcentaje
}

for (let index = 0; index < 5; index++) {
    let precio = parseInt(prompt("ingrese precio"));
    let porcentaje = parseInt(prompt("ingrese porcentaje"));
    alert(impuesto(precio, porcentaje));
    
}

 */

/* function ingreso (valor){
    return Math.round(valor);
}

for (i = 1; i <= 5; i++) {
    let pedido = prompt("ingrese numero") ;
    alert(ingreso(pedido));
} */


/* let producto = prompt("Ingrese que producto desea: \n1-Tomate\n2-Papa\n3-Carne\n4-Pollo").toUpperCase(); 
let tomate = "", papa = "", carne = "", pollo = "";
while (producto != "ESC") {
    switch (producto) {
        case "1":
            tomate ++
            break;
        case "2":
            papa ++
            break;
        case "3":
            carne ++
            break;
        case "4":
            pollo ++
            break;
        default:
            alert("error, ingrese un valor valido")
            break;
    }
    producto = prompt("Ingrese que producto desea: \n1-Tomate\n2-Papa\n3-Carne\n4-Pollo"); 
}
alert(`${tomate} Tomates \n${papa} Papas \n${carne} cortes de Carne \n${pollo} Pollos `) */

/* let entrada = prompt("Ingresa tu nombre")
let salida = "¡¡Hola " + entrada + "!!";
alert(salida);
 */

/* let nombreIngresado = prompt("Ingrese su Nombre")
let apellidoIngresado = prompt("Ingrese su Apellido")

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\napellido: "+apellidoIngresado)
}else {
    alert("Ingresar Nombre y apellido")
}
 */


/* 
let edad = parseInt(prompt("Escribe tu edad"));

if(edad == " ") {
    alert("error: recarga la pagina e ingresa tu edad")
}
else if((edad >= 0) && (edad < 3)) {
    alert("bebe")
}else if((edad >= 3) && (edad < 13)) {
    alert("niño")
}else if((edad >= 13) && (edad <= 17)) {
    alert("adolescente")
}else { 
    alert("adulto")
}
 */

/* let edad = parseInt(prompt("Escribe tu edad"));

if((edad == "0") || (edad > 120)) {
    alert("error: recarga la pagina e ingresa tu edad")
}
else if((edad >= 1) && (edad < 3)) {
    alert("bebe")
}else if((edad >= 3) && (edad < 13)) {
    alert("niño")
}else if((edad >= 13) && (edad <= 17)) {
    alert("adolescente")
}else { 
    alert("adulto")
}

 */




/* 
    let ingreso = prompt("nombre");

    while(ingreso != "mariano"){
        alert(hola);
    }
 */
/*     let numero = parseInt(prompt("Ingrese un numero"))

    for (let i = 0; i < 5; i++) {
        let result = numero + i;
        let mensaje = `${numero} + ${i} = ${result}`;
        alert(mensaje);
    }
while(numero == 5) {
    alert("bien")
} */

/* 
    for(let i = 0; i < 10; i++){
        if (i === 7) {
            alert("Sala llena, intente mas tarde")
            continue;
        }
        let nombre = prompt("Ingrese su nombre");
        let mensaje = `Sala N ${i} Nombre: ${nombre}`;
        alert(mensaje);

      } */