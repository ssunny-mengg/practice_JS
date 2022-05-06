let lotto_number = prompt("Enter your number")    // prompt รับ input จาก user
let random_number = Math.floor(Math.random() * 10)  // Math.random() สุ่มเลขระหว่าง 0 - 1, Math.floor() ปัดเศษลงให้เป็นจำนวนเต็ม

// แสดงผล
document.getElementById("result").innerHTML = random_number
document.getElementById("yourNumber").innerHTML = lotto_number
if(random_number == lotto_number){
    alert("!!!!! Congratulations !!!!!")
}else{
    alert("You lost the lotto :(")
}