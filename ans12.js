const date = new Date();
// - YYYY-MM-DD HH:mm
const date1 = date.getFullYear()+ "-" + (date.getMonth() + 1)+ "-" + date.getDate()+ " " + date.getHours() + ":" + date.getMinutes() ;
console.log(date1);

// - DD-MM-YYYY HH:mm
const date2 =date.getDate() + "-" + (date.getMonth() + 1) + "-"  + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() ;
console.log(date2);

// - DD/MM/YYYY HH:mm
const date3 =date.getDate() + "/" + (date.getMonth() + 1)+ "/" + date.getFullYear() + " " + date.getHours() + ":" +date.getMinutes();
console.log(date3);



