// Bài 1
console.log("bài 1");
function turnoff() {
  const off = document.querySelector(".img");
  off.src = `./images/pic_bulboff.gif`;
}
function turnon() {
  const on = document.querySelector(".img");
  on.src = `./images/pic_bulbon.gif`;
}
// Bài 2
console.log("bài 2");
function registercouse() {
  const register = document.querySelector(".register");
  register.remove();
}
function registered() {
  const registeredcouse = document.querySelector(".h3");
  registeredcouse.style.color = "red";
  registeredcouse.innerHTML = `Khóa học đã đăng ký thành công`;
}
function ok() {
  registercouse();
  registered();
}
// bài 3
function login() {
  const nameaccount = document.querySelector("#account");
  const namepass = document.querySelector("#password");
  if (nameaccount.value === "admin" && namepass.value === "admin123") {
    alert("Đăng nhập thành công");
  } else {
    alert("Bạn đã nhập sai thông tin. Xin mời nhập lại");
  }
}
// Bài 4
function calcmoney() {
  const totalbill = document.getElementById("bill");
  const totaltip = document.getElementById("tip");
  const totalman = document.getElementById("num");
  const result = document.querySelector(".money");
  if (
    totalbill.value === "" ||
    totaltip.value === "" ||
    totalman.value === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    const paymoney =
      (Number(totalbill.value) +
        Number(totalbill.value) * Number(totaltip.value)) /
      Number(totalman.value);
    result.innerHTML = `$ ${paymoney}`;
  }
}
// (total_bill + total_bill * total_tip) / total_man
