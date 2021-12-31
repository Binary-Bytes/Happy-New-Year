const prevYear = document.getElementById('prevYear');
const newYear = document.getElementById('newYear');

let nextYear = new Date().getFullYear() + 1;
nextYear = '' + nextYear

console.log(typeof(nextYear));

var lastNum = nextYear.charAt(nextYear.length-1);
console.log(lastNum)

prevYear.innerHTML = 1;
newYear.innerHTML = 2;