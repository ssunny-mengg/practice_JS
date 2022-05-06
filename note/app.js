/*console.log("Hello Ming")   // แสดงข้อความในส่วน console
alert("This is alert box")  // แสดง alert box

var name = "ming", first_name = "Khemmaporn", last_name = "Ngamsiriruangsakul"
console.log(name + " " + first_name + " " + last_name)

// alert(10 + 10)
var num = 10
console.log(typeof num)

{
    let y = 15  // let ใช้ได้แค่ใน scope นั้นเท่านั้น ต่างจาก var ที่ใช้ได้ทั้งโปรแกรม

}
*/

let lotto_number = prompt("Enter your number")    // prompt รับ input จาก user
// console.log(lotto_number)
let random_number = Math.floor(Math.random() * 10)  // Math.random() สุ่มเลขระหว่าง 0 - 1, Math.floor() ปัดเศษลงให้เป็นจำนวนเต็ม
// console.log(random_number)
document.getElementById("result").innerHTML = random_number
document.getElementById("yourNumber").innerHTML = lotto_number

// console.log(1 == "1")   // true
// console.log(1 === "1")  // false

