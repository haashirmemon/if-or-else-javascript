// var username = ("haashir shakeel ahmed")


// document.write(username)
//  var num1= 11
//  if (num1 > 12) {
//     console.log("ifchalnachahiyai")
    
//  } else {
//     console.log("warnabekaarhai")}


//  var bankbalance=+prompt("enter your bank balance")
// if (bankbalance > 500000) {
//     console.log("bhaijaan mubarak ho rishta pakka")
    
// } else {
//     console.log("yaar maazrat abba amma nahi maan rahai  ")
// }

// if(num > 5){
//     console.log('if')
// }
// else if(num > 6){
//     console.log('else if')
// }
// else{
//     console.log('else')
// }


// var percentage= +prompt("enter your percentage!");


// if (percentage > 100) {
//     console.log("bhai jaan tum wargaye")
// }  else if(percentage >= 90){
//     console.log("maalik mubarak ho A5 grade")
// }else if(percentage >= 100){
//     console.log("maalik mubarak ho A1 grade")
// } else if(percentage >= 70  &percentage <=80){
//     console.log("maalik mubarak ho A grade")
// } else if(percentage >= 50 &percentage <= 60){
//     console.log("maalik mubarak ho c grade")
// } else if(percentage >= 60& percentage<=70){
//     console.log("maalik mubarak ho B grade")
// }
// else{
//     console.log("percentage")
// }
    

// var percentage = +prompt('enter your percentage!');

// if (percentage > 100) {
//     console.log('bhai percent to deda sahi!');
// } else if (percentage < 50) {
//     console.log('maalik rickshaw chalao!')
// } else if (percentage >= 50 && percentage <= 60) {
//     console.log('C grade aya haa maalik.')
// } else if(percentage >=61 && percentage <= 70){
//     console.log('B grade aya ha maalik')
// }
// else {
//     console.log(percentage);
// }

// var num1= 10
// if(num1>8) {
//     console.log("8 sai barahai")
    
//  }if (num1>6) {
//     console.log("6 sai barahai")
    
//  }if (num1>2) {
//     console.log("2 sai barahai")
    
//  } else {
//     console.log("2 sai chota hai")
    
//  }
// var sub1=+prompt("chemistry")
// var sub2=+prompt("bio")
// var sub3=+prompt("physics")
// var sub4=+prompt("mathemthics")
// var totalMarks= (1000);
// console.log(totalMarks)
// var obtained =+(sub1+sub2+sub3+sub4)
// console.log(obtained/totalMarks* 250)
function calculateAge() {
   var dob = document.getElementById('dob').value;
   var dobDate = new Date(dob);
   var now = new Date();
   var age = now.getFullYear() - dobDate.getFullYear();
   var monthDiff = now.getMonth() - dobDate.getMonth();

   if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dobDate.getDate())) {
       age--;
   }

   document.getElementById('ageResult').innerText = "Your age is: " + age;

   // Get current time
   var hours = now.getHours();
   var minutes = now.getMinutes();
   var seconds = now.getSeconds();

   // Format time
   var timeString = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

   document.getElementById('timeResult').innerText = "Current time is: " + timeString;
}

// Display current time when page loads
calculateAge();



