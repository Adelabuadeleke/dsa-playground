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

function diagonalDifference(arr) {
    // Write your code here
    let n =arr.length;
    let d1 = 0;
    let d2 = 0;
    
    for(let i=0; i < n; i++ ){
        for(let j=0; j < n; j++){
            if(i === j){
                d1 += arr[i][j];
            }
            if (i + j === n-1){
                d2 += arr[i][j];
            }
        }
    }
    return Math.abs(d1 - d2);
}
let input = [[1, 2, 3], [24, 5, 6],  [9, 8, 9]];
diagonalDifference(input);
