// 质数,自然数的公约数
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// function divisors(n) {
//   let arr = []
//   let flag = true
//   for(var i = 2; i <= Math.sqrt(n);i++) {
//     for(var j = i; j< n;j++) {
//       if(i*j == n) {
//         arr.push(i,j)
//         flag = false
//       }
//     }
//   }
//   return flag ? `${n} is prime` : [...new Set(arr)].sort((a,b)=>a-b)
// }

divisors(12)
divisors(25)
divisors(13)

function divisors(integer) {
  for(let res = [], i = 2; i <= Math.floor(integer/2);++i) {
    if(integer % i == 0) res.push(i)
  }
  return res.length ? res : `${integer} is prime`
}