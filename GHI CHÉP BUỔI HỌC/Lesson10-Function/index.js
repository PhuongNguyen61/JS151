const arr = [1, 2, 3]
function logArr(arrIn, isTest) {
    if (isTest) console.log(isTest)
    for (let i = 0; i < arrIn.length; i++){
        console.log(arrIn[i]);
    }
}
logArr(arr, 'test')


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }