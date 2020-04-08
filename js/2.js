// 多位数字累乘到1位数的次数   123 => 1

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number
// function persistence(n) {
//   let arr = n.toString().split('')
//   let count = 0
//   while(arr.length> 1) {
//     arr = arr.reduce((p,n)=>p*n).toString().split('')
//     count++
//   }
//   return count
// }
// persistence(999)
console.log(persistence(999));
console.log(persistence(4));
console.log(persistence(23));

// function persistence(num) {
//   var times = 0;
  
//   num = num.toString();
  
//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }
  
//   return times;
// }

function persistence(n) {
  return `${n}`.length > 1
  ? 1+persistence(`${n}`.split('').reduce((p,n)=>p*n)) 
  : 0
}