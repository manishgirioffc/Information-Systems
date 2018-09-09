function displayDate(){
var now=new Date();
var today=now.getDate();
var month=now.getMonth();

var monthname=new Array(12)
monthname[0]="January ";
monthname[1]="February ";
monthname[2]="March ";
monthname[3]="April ";
monthname[4]="May ";
monthname[5]="June ";
monthname[6]="July ";
monthname[7]="August ";
monthname[8]="Septmber ";
monthname[9]="October ";
monthname[10]="November ";
monthname[11]="December ";

var year=now.getFullYear();
var day=now.getDay();

var dayname=new Array(7)
dayname[0]="Sunday ";
dayname[1]="Monday ";
dayname[2]="Tuesday ";
dayname[3]="Wednesday ";
dayname[4]="Thrusday ";
dayname[5]="Friday ";
dayname[6]="Saturday ";

// document.write(monthname[month]+today+  ",   "+year+  "  "+dayname[day]);



document.getElementById('date').innerHTML = monthname[month]+today+  ",   "+year+  "  "+dayname[day] ;
}



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
window.onload=startTime();
window.onload=displayDate();

