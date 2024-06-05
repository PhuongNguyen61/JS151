// Câu 1
// Tính diện tích và chu vi hình chữ nhật
// let dai = 5
// let rong = 4
// let dienTich  = dai * rong
// let chuVi = (dai + rong) * 2
// console.log('Diện tích:', dienTich);
// console.log('Chu vi:', chuVi);

// Câu 2
// Viết một chương trình JavaScript để chuyển đổi số S (giây) nhập từ người dùng thành dạng giờ-phút-giây.
// Gợi ý:  
//     gio=(S - S%3600)/3600;
//     phut=((S %3600)-(S % 3600) % 60)/60;
//     giay=S - phut*60-gio*3600;
// let S = 12345
// let gio = (S - S % 3600) / 3600
// let phut = ((S % 3600) - (S % 3600) % 60) / 60
// let giay = S - phut * 60 - gio * 3600
// console.log(`${gio}h ${phut}m ${giay}s`);

// Câu 3
// Viết một chương trình JavaScript để tính lũy thừa của một số nhập từ người dùng.
// Gợi ý: Sử dụng đối tượng Math trong JS để thực hiện các biểu thức toán học
// let coSo = +prompt('Nhập cơ số')
// let luyThua = +prompt('Nhập lũy thừa')
// let A = coSo ** luyThua2
// console.log(A);

// Câu 4
// Tính trung bình của 3 số bất kỳ
// let num1 = 5
// let num2 = 12
// let num3 = 22
// let trungBinh = (num1 + num2 + num3) / 3
// console.log(trungBinh);

// Câu 5
// Viết một chương trình JavaScript để tính khoảng cách giữa hai điểm trong không gian 2D. Yêu cầu người dùng nhập tọa độ (x, y) của hai điểm và in ra khoảng cách
// Gợi ý: Sử dụng đối tượng Math trong JS để thực hiện các biểu thức toán học
// let x1 = +prompt('Nhập tọa độ x1')
// let y1 = +prompt('Nhập tọa độ y1')
// let x2 = +prompt('Nhập tọa độ x2')
// let y2 = +prompt('Nhập tọa độ y2')
// let khoangCach = (Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2))
// console.log(khoangCach);

// Câu 6
// Viết một chương trình JavaScript để so sánh ba số nhập từ người dùng và trả về true nếu số lớn nhất là số thứ nhất, ngược lại trả về false
// let num1 = +prompt('Nhập số thứ 1')
// let num2 = +prompt('Nhập số thứ 2')
// let num3 = +prompt('Nhập số thứ 3')
// console.log(num1 > num2 && num1 > num3);

// Câu 7
// Viết một chương trình JavaScript để so sánh hai chuỗi nhập từ người dùng và trả về true nếu chúng giống nhau, ngược lại trả về false
// let chain1 = prompt('Nhập chuỗi 1')
// let chain2 = prompt('Nhập chuỗi 2')
// console.log(chain1 == chain2);

// Câu 8
// Viết một chương trình JavaScript kiểm tra số dương nhập vào từ bàn phím
// let num = +prompt('Nhập 1 số')
// console.log(num, num > 0);

// Câu 9
// Viết một chương trình JavaScript kiểm tra năm nhuận.
// Gợi ý: Năm nhuận là năm chia hết cho 400 hoặc chia hết cho 4 và không chia hết cho 100
// let Y = 2024
// console.log(Y,  Y % 400 === 0 || (Y % 4 === 0 && Y % 100 !== 0));

// Câu 10
// Viết một chương trình JavaScript để so sánh hai thời gian (giờ và phút) nhập từ người dùng và trả về true nếu thời gian thứ nhất sớm hơn thời gian thứ hai, ngược lại trả về false
// let h1 = +prompt('Nhập giờ thời gian 1')
// let m1 = +prompt('Nhập phút thời gian 1')
// let h2 = +prompt('Nhập giờ thời gian 2')
// let m2 = +prompt('Nhập phút thời gian 2')
// console.log(h1 > h2 || h1 === h2 && m1 > m2);