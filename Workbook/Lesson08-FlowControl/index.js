// Câu 1
// Sử dụng vòng lặp, tính tổng các chữ số từ  đến 100
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum += i
//     console.log(sum);
// }
// console.log(sum);

// Câu 2
// Các số từ 0 đến 100, in ra các số chia hết cho 3 và 5
// Cách 1
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }
// Cách 2
// for (let i = 0; i <= 100; i++){
//     if (!(i % 3) && !(i % 5)){
//         console.log(i);
//     }
// }

// Câu 3
// Tính giai thừa của một số nguyên bất kỳ
// let A = 1
// let n = +prompt('Nhập 1 số')
// for (let i = 1; i <= n; i++) {
//     A *= i
// }
// console.log(A);

// Câu 4
// Sử dụng vòng lặp for để in ra bảng cửu chương từ 2 đến 9
// for (let i = 2; i <= 9; i++) {
//     console.log('Bảng cửu chương', i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// Câu 5
// Thực hiện đưa một số nguyên về dạng nhị phân 0,1
// Gợi ý: Để đưa số nguyên về 0, 1 ta sẽ thực hiện chia lấy dư với 2 đến khi không thể chia được nữa, dạng nhị phân sẽ là thứ tự ngược lại của các số dư
// let n = 35
// let str = ''
// for (let i = 0; n >= 1 ; i++) {
//     str += n % 2
//     n = Math.floor(n / 2)
// }
// let newStr = ''
// for (let j = str.length - 1; j >=0; j--) {
//     newStr += str[j]
// }
// console.log(newStr);

// Câu 6*
// Sử dụng vòng lặp, thực hiện tính phép tính sau, với n là số nguyên
// let n = 20
// let s = 0
// for (let i = 1; i <= n; i++){
//     s = Math.sqrt(s + i)
// }
// console.log(s);

// Câu 7*
// Sử dụng vòng lặp, thực hiện tính phép tính sau, với n là số nguyên:
// let n = 20
// let s = 0
// for (let i = n; i > 0; i--){
//     s = Math.sqrt(s + i)
// }
// console.log(s);