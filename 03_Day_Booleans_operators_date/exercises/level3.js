// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const now = new Date();

const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const day = now.getDate().toString().padStart(2, "0");
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");

const readable = `${year}-${month}-${day} ${hours}:${minutes}`;

console.log(readable);
