function maskify(cc) {
  let str = ''
  let end = cc.slice(-4)
  cc = cc.slice(0,cc.length-4)
  cc = cc.replace(/./g,'#')
  str+=cc+end
  return str
}
console.log(maskify('4556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify('Skippy'));
console.log(maskify('Nananananananananananananananana Batman!'));