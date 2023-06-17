const now = new Date();
console.log(now);
// - What is the year today?
console.log(now.getFullYear());
//- What is the month today as a number?
console.log(now.getMonth());
//- What is the date today?
console.log(now.getDate());
//- What is the day today as a number?
console.log(now.getDay());
//- What is the hours now?
console.log(now.getHours());
//- What is the minutes now?
console.log(now.getMinutes());
//- January 1, 1970 to now.
const date = new Date("1970-01-01");
const newdate = (now -date);
console.log(newdate);
