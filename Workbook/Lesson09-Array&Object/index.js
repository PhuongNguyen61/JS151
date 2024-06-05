// Câu 1
// Đếm Số Lần Xuất Hiện trong Mảng:
// const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
// const targetCounting = 2;

// let count = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (targetCounting === numbers[i]){
//         count++
//     }
// }
// console.log(count);
// console.log(numbers.includes(2)); // Kiểm tra xem 1 phần tử có thuốc 1 mảng không
// console.log(numbers.indexOf(1)); // Tìm index của 1 phần tử trong mảng, nếu không tìm thấy trả về -1

// Câu 2
// Tìm Số Lớn Nhất Trong Mảng:
// const numbers = [5, 2, 9, 3, 7, 11, 8];

// let max = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max){
//         max = numbers[i]
//     }
// }
// console.log(max);

// Câu 3
// Đảo Ngược Mảng:
// const array = [1, 2, 3, 4, 5];

// const newArr = []
// for (let i = array.length - 1; i >=0; i--) {
//     newArr.push(array[i])
// }
// console.log(newArr);

// Câu 4
// Xóa Phần Tử Trùng Nhau Khỏi Mảng:
// const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];

// Cách 1
// const newArr = []
// for (let i = 0; i < duplicatesArray.length; i++) {
//     if (!newArr.includes(duplicatesArray[i])){
//         newArr.push(duplicatesArray[i])
//     }
// }
// console.log(newArr);
// Cách 2
// for (let i = 0; i < duplicatesArray.length - 1; i++) {
//     for (let j = i + 1; j < duplicatesArray.length; j++) {
//         if (duplicatesArray[i] === duplicatesArray[j]) {
//             duplicatesArray.splice(j, 1)
//             j--
//         }
//     }
// }
// console.log(duplicatesArray);

// Câu 5
// Tính Điểm Trung Bình từ Mảng Đối Tượng:
// const students = [
//     { name: "Alice", age: 20, grades: [80, 85, 90] },
//     { name: "Bob", age: 21, grades: [75, 88, 95] }
// ];

// const avgArr = []
// for (let i = 0; i < students.length; i++) {
//     const grades = students[i].grades
//     let sum = 0
//     for (let j = 0; j < grades.length; j++) {
//         sum += grades[j]
//     }
//     const avg = sum / grades.length
//     avgArr.push({
//         name: students[i].name,
//         avg,
//     })
// }
// console.log(avgArr);

// Câu 6
// Tìm Sản Phẩm Rẻ Nhất Trong Mảng Đối Tượng:
// const products = [
//     { name: "Áo", price: 20 },
//     { name: "Quần", price: 30 },
//     { name: "Giày", price: 50 }
// ];

// const minPrice = products[0].price
// let minProduct = products[0]
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price < minPrice) {
//         minPrice = products[i].price
//         minProduct = products[i]
//     }
// }
// console.log(minProduct);

// Câu 7*
// Thực hiện nhóm các điểm số của các học sinh lại thành đối tượng: tên môn học, danh sách điểm
// const students = [
//     { name: "Alice", age: 20, grades: { math: 90, english: 85, science: 88 } },
//     { name: "Bob", age: 21, grades: { math: 80, english: 75, science: 78 } }
// ];

// const pointTable = {
//     math: [],
//     english: [],
//     science: []
// }
// for (let i = 0; i < students.length; i++) {
//     const grades = students[i].grades
//     pointTable.math.push(grades.math)
//     pointTable.english.push(grades.english)
//     pointTable.science.push(grades.science)
// }
// console.log(pointTable);




// Câu 1
// Đếm Số Lần Xuất Hiện trong Mảng:
// const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
// const targetCounting = 2;
// let count = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (targetCounting === numbers[i]){
//         count++
//     }
// }
// console.log(count);

// Câu 2
// Tìm Số Lớn Nhất Trong Mảng:
// const numbers = [5, 2, 9, 3, 7, 11, 8];
// let numMax = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (numMax < numbers[i]) {
//         numMax = numbers[i]
//     }
// }
// console.log(numMax);

// Câu 3
// Đảo Ngược Mảng:
// const array = [1, 2, 3, 4, 5];
// const newArr = []
// for (let i = array.length-1; i >= 0; i--) {
//     newArr.push(array[i])
// }
// console.log(newArr);

// Câu 4
// Xóa Phần Tử Trùng Nhau Khỏi Mảng:
// const duplicatesArray = [1, 2, 2, 2, 3, 4, 4, 5];
// for (let i = 0; i < duplicatesArray.length - 1; i++) {
//     for (let j = i + 1; j < duplicatesArray.length; j++) {
//         if (duplicatesArray[i] === duplicatesArray[j]) {
//             duplicatesArray.splice(j, 1)
//             j--
//         }
//     }
// }
// console.log(duplicatesArray);

// Câu 5
// Tính Điểm Trung Bình từ Mảng Đối Tượng:
// const students = [
//     { name: "Alice", age: 20, grades: [80, 85, 90] },
//     { name: "Bob", age: 21, grades: [75, 88, 95] }
// ];
// const avgArr = []
// for (let i = 0; i < students.length; i++) {
//     const grades = students[i].grades
//     let sum = 0
//     for (let j = 0; j < grades.length; j++) {
//         sum += grades[j]
//     }
//     const avg = sum / grades.length
//     avgArr.push({
//         name: students[i].name,
//         avg,
//     })
// }
// console.log(avgArr);

// Câu 6
// Tìm Sản Phẩm Rẻ Nhất Trong Mảng Đối Tượng:
// const products = [
//     { name: "Áo", price: 20 },
//     { name: "Quần", price: 30 },
//     { name: "Giày", price: 50 }
// ];
// let minPrice = products[0].price
// let minProduct = products[0]
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price < minPrice){
//         minPrice = products[i].price
//         minProduct = products[i]
//     }
// }
// console.log(minProduct);

// Câu 7*
// Thực hiện nhóm các điểm số của các học sinh lại thành đối tượng: tên môn học, danh sách điểm
// const students = [
//     { name: "Alice", age: 20, grades: { math: 90, english: 85, science: 88 } },
//     { name: "Bob", age: 21, grades: { math: 80, english: 75, science: 78 } }
// ];
// const math = []
// const english = []
// const science = []
// for (let i = 0; i < students.length; i++) {
//     const grades = students[i].grades
//     math.push(grades.math)
//     english.push(grades.english)
//     science.push(grades.science)
// }
// console.log({math, english, science});