// BTVN 1
let gioitinh = "nu";
let tuoi = 30;

if (gioitinh === "nam" && tuoi >= 18 && tuoi <= 27) {
  console.log("Đủ điều kiện nhập ngũ");
} else {
  console.log("không đủ điều kiện nhập ngũ");
}

// BTVN 2
let salary = 10000000;
if (salary < 0) {
  console.log("nhập lại số lương");
} else if (salary <= 11000000) {
  result = salary;
  console.log(`Lương thực lĩnh là ${result} VND `);
} else if (salary > 11000000 && salary <= 16000000) {
  result = salary - salary * 0.05;
  console.log(`Lương thực lĩnh là ${result} VND `);
} else if (salary > 16000000 && salary <= 21000000) {
  result = salary - salary * 0.1;
  console.log(`Lương thực lĩnh là ${result} VND `);
} else if (salary > 21000000 && salary <= 26000000) {
  result = salary - salary * 0.15;
  console.log(`Lương thực lĩnh là ${result} VND `);
} else if (salary > 26000000 && salary <= 31000000) {
  result = salary - salary * 0.2;
  console.log(`Lương thực lĩnh là ${result} VND `);
} else if (salary > 31000000) {
  resul.logt = salary - salary * 0.35;
  console.log(`Lương thực lĩnh là ${result} VND `);
}

////ddd
// let sum = 0;
// let index = 1;
// while (12 % index === 0) {
//   sum += index;
//   index++;
// }
// console.log(sum);
function aa(num) {
  let a = 0;
  for (i = 0; i <= num; i++) {
    if (num % i === 0) {
      a += i;
    }
  }
  console.log(`tong cac uoc la:`, a);
}

aa(6);
function numberfromtoN(b) {
  let i = 0;
  while (i < b) {
    i++;
    console.log(i);
  }
}
numberfromtoN(10);
function calculateSumOfDigits(num) {
  let result = 0;
  while (num > 0) {
    const temp = num % 10;
    result += temp;
    num = Math.floor(num / 10);
  }
  console.log("Tong la:", result);
}
calculateSumOfDigits(1023);
calculateSumOfDigits(1024);

//
function songuyento(number) {
  let n = number;
  let i = 1;
  while (i < n) {
    if (n % i != 0) {
      console.log(`${n} la so nguyen to`);
    } else {
      console.log(`${n} khong la so nguyen to`);
    }
    i++;
  }
}
songuyento(4);
