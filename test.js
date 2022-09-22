// function plusMinus(arr) {
//     // Write your code here
//     let zeros = 0;
//     let negatives = 0;
//     let positives = 0;
//     // console.log(arr.length)
//     // check for zeros
//     arr.forEach((i)=>{
//         if(i === 0){
//             zeros++;
//             // return;
//         } else if(i > 0 === true) {
//             positives++;
//             // return;
//         } else if(i < 0 === true) {
//             // console.log(Math.sign(i))
//             negatives++;
//             // console.log(negatives)
//             // return;
//         }
//     })
//         let zeroRatio = zeros/arr.length
//         let negativeRatio = Number(negatives/arr.length);
//         let positivesRatio = Number(positives/arr.length);
//         // console.log(Math.sign(-3))
//         console.log(negatives)

        
//         console.log(`zeros ${zeroRatio}`)
//         console.log(negativeRatio);
//         console.log(positivesRatio);
// }
 
// let nums = [-4,3,-9,0,4,1]
// plusMinus(nums)


// function miniMaxSum(arr) {
//     arr.sort((a, b)=> {
//         if (a === Infinity) {
//             return 1;
//         } else if(isNaN(a)){
//             return -1;
//         } else {
//             return a - b;
//         }

//     })
//     // Write your code here
//     let min = arr.slice(0,4)
//     let max = arr.slice(1, 5)
//     // console.log(min);
//     // console.log(max);
//     console.log(arr)
//     let maxCalc = 0;
//     let minCalc = 0;
//     max.forEach((num)=>{
//         maxCalc += num;
//     })
    
//     min.forEach((num) => {
//         minCalc += num;
//     })

//     console.log(minCalc, maxCalc)
// }

// let arr = [7, 69, 2, 221, 8974]

// miniMaxSum(arr)


// function timeConversion(s) {
//     // Write your code here
//     let check = s.slice(-2)
//     let med = s.slice(0, -2)
//     let splt = med.split(":")
//     let hr = Number(splt[0]) + Number(12)
//     // let newTime = `${hr}:${splt[1]}:${splt[2]}`
//     if(check == 'PM' && hr !== 24){
//         console.log(`${hr}:${splt[1]}:${splt[2]}`)
//     } else if(check === 'PM' && hr === 24) {
//         console.log(`00:${splt[1]}:${splt[2]}`)
//     } else if(check === 'AM'){
//         console.log(`${splt[0]}:${splt[1]}:${splt[2]}`)
//     }
//     // console.log(check)
//     // console.log(newTime)
// }

// timeConversion('12:05:45PM')

// function matchingStrings(strings, queries) {
//     // Write your code here
//     let  result = [];
//     queries.forEach(q => {
//         let res = 0;
//         strings.forEach(s=>{
//             if(s === q) {
//                 res++;
//             }
//         }) 
//         result.push(res);
//     })
//     return result;
// }

// let strings = ['ab', 'ab', 'abc'];
// let queries = ['ab', 'abc', 'bc'];

// matchingStrings(strings, queries)

// function lonelyinteger(a) {
//     // Write your code here
//     // let unique = a.filter(function(value){
//     //     a.indexOf(value) === a.lastIndexOf(value)
//     // })
//     // console.log(unique[0])
//     // return unique;

//     for (const num of a) {
//         if ( a.indexOf(num) === a.lastIndexOf(num)){
//             return num
//         }
//     }
// }

// let lonely = [1, 2, 3, 4, 3, 2, 1]
// lonelyinteger(lonely)

// function flippingBits(n) {
//     // Write your code here
//     return (2**32)-1-n
// }

// let a = 9;
// flippingBits(a);

// function diagonalDifference(arr) {
//     // Write your code here
//     let n =arr.length;
//     let d1 = 0;
//     let d2 = 0;
    
//     for(let i=0; i < n; i++ ){
//         for(let j=0; j < n; j++){
//             if(i === j){
//                 d1 += arr[i][j];
//             }
//             if (i + j === n-1){
//                 d2 += arr[i][j];
//             }
//         }
//     }
//     return Math.abs(d1 - d2);
// }
// let input = [[1, 2, 3], [24, 5, 6],  [9, 8, 9]];
// diagonalDifference(input);


// function countingSort(arr) {
//     // Write your code here
//     let range = [];
    
//     for(let i = 0; i < 100; i++){
//         range.push(i)
//     }
//     let res = []

//     for(const num of range) { 
//         let temp = 0;
//         for(const val of arr){
        
//             if(val === num) {
//                 temp++;
//             }
//         }
//         res.push(temp);
//     }
//     return res;
// }

// let input = [1, 1, 2, 3, 1]
// countingSort(input);

// function pangrams(s) {
//     // Write your code here
//     const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//     const alphabet = alpha.map((x) => String.fromCharCode(x));

//     const textUpper = s.toUpperCase()
//     const check = []
//     alphabet.forEach(a =>{
//         let includes = textUpper.includes(a);
//         check.push(includes)
//         // console.log(includes);
//     })

//     // const res = check.includes(false);
//     if(check.includes(false)) {
//         return 'not pangram'
//     } else {
//         return 'pangram'
//     }

// }


function twoArrays(k, A, B) {
    // Write your code here
    let check = []
    let newA = A.sort((a, b)=> {
        if (a === Infinity) {
            return 1;
        } else if(isNaN(a)){
            return -1;
        } else {
            return a - b;
        }
    });

    let newB = B.sort((a, b)=> {
        if (a === Infinity) {
            return 1;
        } else if(isNaN(a)){
            return -1;
        } else {
            return b - a;
        }
    });

    // console.log(newA)
    // console.log(newB)
    for(let i = 0; i < A.length; i++){
        if(A[i] +  B[i] >= k ){
            check.push('YES')
            // console.log('YES')
        } else {
            check.push('NO')
            // console.log('NO')
        }
        
    }
    if(check.includes('NO')){
        console.log('final: NO')
    } else {
        console.log('YES')
    }
    
}

// 18 73 55 59 37 13 1 33
// 81 11 77 49 65 26 29 49
// 91

// 18 94
// 84 2 50 51 19 58 12 90 81 68 54 73 81 31 79 85 39 2
// 53 102 40 17 33 92 18 79 66 23 84 25 38 43 27 55 8 19
// 8 88
// 66 66 32 75 77 34 23 35
// 61 17 52 20 48 11 50 5
// 14 45
// 11 16 43 5 25 22 19 32 10 26 2 42 16 1
// 33 1 1 20 26 7 17 39 23 34 10 11 38 20
// 11 59
// 15 16 44 58 5 10 16 9 4 20 24
// 37 45 41 46 8 23 59 57 51 44 59
// 8 32
// 28 14 24 25 2 20 1 26
// 4 3 1 11 25 22 2 4
// NO
// YES
// NO
// NO
// YES
// NO
// NO
// YES
// NO
// YES
let k = 94
let A = [84, 2, 50, 51, 19, 58, 12, 90, 81, 68, 54, 73, 81, 31, 79, 85, 39, 2]
let B = [53, 102, 40, 17, 33, 92, 18, 79 ,66, 23, 84, 25, 38, 43, 27, 55, 8, 19]

twoArrays(k, A, B)
