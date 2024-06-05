// Array
// const arr1 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2]
// const arr2 = ['Một', 'Hai', 'Ba']
// const arr3 = [[], []]
// const arr4 = [{}, {}]

// Object
// const phuongInfo = {
//     Name: 'Phuong'
//     Age: 22
//     HomeTown: 'Hoa Binh'
//     Car: {
//         Name: 'Audi'
//         Level: 'A6'
//     }
// }

// 1. Các phương thức (Method) sử dụng với array
// + Lấy độ dài: arr.length
// console.log(arr2.length);
// + Thứ tự (index): Từ 0 đến (arr.length - 1)
// + Lấy phần tử trong array: arr[index]
// console.log(arr2[0]);
// Khởi tạo arr: arr = new Array(3)
// const arrA = new Array(3)
// console.log(arrA);
// + Gán giá trị cho 1 phần tử: arr[index] = <value>
// arrA[1] = 'Conan'
// console.log(arrA);
// + Thêm phần tử vào cuối: arr.push(<value>)
// arr2.push('Bốn')
// console.log(arr2);
// + Xóa phần tử ở cuối: arr.pop()
// arr2.pop()
// console.log(arr2);
// + Xóa phần tử ở đầu: arr.shift()
// arr2.shift()
// console.log(arr2);
// + Thêm phần tử vào đầu: arr.unshift()
// arr2.unshift('Bốn')
// console.log(arr2);
// + Copy một mảng nhỏ trong 1 mảng: arr.slice(<gt đầu>)
// => Luôn tạo ra 1 mảng mới và không thay đổi mảng ban đầu
// const arrCopy = arr2.slice(1, 3) // Lấy 1, 2 không lấy 3
// console.log('arrCopy', arrCopy)
// console.log('arr2', arr2)
// + Cắt mảng: arr.splice(<index>, số phân tử bị xóa)
// => Thay đổi mảng ban đầu thành mảng mới
// arr2.splice(0, 3) // Cắt 0, 1, 2
// console.log('arrCopy', arrCopy)
// console.log('arr2', arr2)
// + Nối mảng: arr1.concat(arr2)
// Cách 1
// const arrConcat = arr1.concat(arr2)
// console.log(arrConcat);
// Cách 2
// const arrConcat = [...arr1, ...arr2]
// console.log(arrConcat);

// + Sắp xếp các phần tử trong mảng: arr1.sort()
// console.log(arr1)

// --------------------------------------------------

// 2. Một số phương thức của Object
// + Gọi giá trị (value) của một thuộc tính (key) trong object
// obj.<tên key>
// console.log(phuongInfo.Age);
// obj['<key>']
// const key = ['Name', 'Age']
// console.log(phuongInfo.[key[1]]);