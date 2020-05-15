/**
 * likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 * 
 */
//
// function likes(names) {
//   let beforeTwo = names.slice(0, 2);
//   let afterArr = names.slice(2);
//   return afterArr.length > 1
//     ? `${names[0]}, ${names[1]} and ${afterArr.length} others like this`
//     : afterArr.length == 1
//     ? `${names[0]}, ${names[1]} and ${afterArr[0]} like this`
//     : beforeTwo.length == 2
//     ? `${names[0]} and ${names[1]} like this`
//     : beforeTwo.length == 1
//     ? `${names[0]} likes this`
//     : "no one likes this";
// }



function likes (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}

console.log(likes(["Peter"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Max","Max","Max","Max"]))


var str = 'bye bye bye boy!'
var reg = /bye|boy/ig
var arr = [1,2,3]
var res = str.replace(reg, (val)=>{
  return val == 'bye' ? arr.shift() : 'girl'
})
console.log(res)