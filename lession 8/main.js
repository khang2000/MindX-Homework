
// BTVN 1
let gioitinh = 'nu';
let tuoi = 30;

if( gioitinh === 'nam' &&  tuoi>=18 && tuoi<=27){
    console.log( "Đủ điều kiện nhập ngũ")
}else{
    console.log("không đủ điều kiện nhập ngũ")
}

// BTVN 2
let salary = 100000000; 
if (salary<0){
    console.log('nhập lại số lương');
}else if ( salary <=11000000) {
    result = salary;
    console.log(`Lương thực lĩnh là ${result} VND `)
}else if ( salary>11000000 && salary <=16000000) {
    result = salary - salary*0.05;
    console.log(`Lương thực lĩnh là ${result} VND `)
}else if (salary>16000000 && salary<=21000000) {
    result = salary - salary*0.1;
    console.log(`Lương thực lĩnh là ${result} VND `)
}else if (salary>21000000 && salary<=26000000) {
    result = salary - salary*0.15;
    console.log(`Lương thực lĩnh là ${result} VND `)
}else if (salary>26000000 && salary<=31000000) {
    result = salary - salary*0.2;
    console.log(`Lương thực lĩnh là ${result} VND `)
}else if (salary>31000000) {
    result = salary - salary*0.35;
    console.log(`Lương thực lĩnh là ${result} VND `)
}

