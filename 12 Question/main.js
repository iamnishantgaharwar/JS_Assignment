// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const today = new Date;

console.log(today.getFullYear(),"-",today.getMonth() + 1,"-",today.getDate(), today.getHours(),":",today.getMinutes());
console.log(today.getDate(),"-",today.getMonth() + 1,"-",today.getFullYear(), today.getHours(),":",today.getMinutes());
console.log(today.getDate(),"/",today.getMonth() + 1,"/",today.getFullYear(), today.getHours(),":",today.getMinutes());
