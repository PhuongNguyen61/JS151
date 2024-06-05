// console.log('ABC');

// console.log('log lần 1',a);
// let a = 3
// var a = 5
// const a = 7
// console.log('log lần 2',a);


// let, const không có hoisting,
// var thì có


// const là hàng số -> không thể gán lại
// var, let có thể gán lại được


// let, const không thể khai báo lại được
// var có thể khai báo lại được


// trong JS có 2 nhóm kiểu giữ liệu:
// - Kiểu dữ liệu nguyên thủy: string, number, null, boolean, undefined
// - Kiểu dữ kiệu phức tạp: object, array, function


// let string = 'string'
// let number = 1223
// let _null = null
// let _boolean = true || false
// let _undefined = undefined

// let object = {
//     key: 'value';
// }
// let array = [1, 2, 3, 4]
// let _function - (num) -> { }

// console.log(typeof );

// = , + , - , * , / , ** , % , nod
// && , || , ! , !! , < , > , <= , <== , >= , >== , != , !== , == , ===
// Luôn trả ra kiểu giữ liệu boolean: true hoặc false
// let x1 = 5
// let x2 = 7
// console.log(((x1 > x2) || (x1 == 5)));

// >= , <= , == : chỉ so sánh về giá trị
// x1 = 5
// x2 = '5'
// console.log(x1 == x2)

// >== , <== , === : chỉ so sánh về cả giá trị và kiểu dữ liệu
// console.log(x1 === x2)

// Toán tử tính toán (+ , -, *, /)
// console.log('1.', x1 + x2) // 55
// console.log('2.', x1 - x2) // 0
// console.log('3.', x1 * x2) // 25
// console.log('4.', x1 / x2) // 1

// Bài 1: Tính diện tích, chu vi hình chữ nhật
// let a = 5
// let b = 7
// let S = a * b
// let c = 2 * (a + b)
// console.log('Diện tích', S);
// console.log('Chu vi', c);

// Bài 2: Chuyển đồi giờ - phút - giây
// let sc = 6000
// let hour = (sc - (sc % 3600)) / 3600
// let minute = ((sc % 3600) - (sc % 3600) % 60) / 60
// let g = sc - minute * 60 - hour * 3600
// console.log(`${hour}h ${minute}m ${g}s`);

// Bài 3: Nhập 1 số và tính lũy thừa của nó
// let number = 10
// let lt = 4
// console.log(bt);
// let number = prompt('Nhập 1 số') // Cho nhập 1 dữ liệu
// let lt = prompt ('Nhập 1 số lũy thừa')
// let bt = number ** lt
// alert (`Lũy thừa của số bạn vừa nhập là: ${bt}`) // In ra dữ liệu

// Bài 3: Tính trung bình cộng của 3 số
// let num1 = +prompt ('Nhập số thứ 1')
// let num2 = +prompt ('Nhập số thứ 2')
// let num3 = +prompt ('Nhập số thứ 3')
// let tb = (num1 + num2 + num3) / 3
// alert(`Trung bình cộng của 3 số bạn nhập là: ${tb}`)