let name=prompt("Enter your name");

let gender="";

gender = prompt("Enter your gender");
if (gender != "male" && gender != "female"){
alert("please provide your gender as male or female");
gender = prompt("Enter your gender");
}

age=prompt("Enter your age")
if (age <= 0) {
   alert("Age is Wrong"); 
   age=prompt("Enter your age")
}




let i;
i = confirm("Do you want a welcoming message?")
if (i == true){

 if (gender == "male") {
alert ("Welcome Mr. " + name);
}
else if(gender == "female") {
    alert("Welcome Ms. " + name); }
    
    else {
    alert("Welcome " + name)
 }  
}


let arrAns=[];
let q1 =prompt("did you eat today?");
if ((q1 === "yes") ||(q1 === "no") ) {
    arrAns.push(q1)
}else {
    arrAns.push("invalid")
}
let q2 =prompt("did you sleep today?");
if ((q2 === "yes") ||(q2 === "no") ) {
    arrAns.push(q2)
}else {
    arrAns.push("invalid")
}
let q3 =prompt("did you drink water today?");
if ((q3 === "yes") ||(q3 === "no") ) {
    arrAns.push(q3)
}else {
    arrAns.push("invalid")
}

console.log(arrAns.join(" | "))
let rat =prompt("did you eat today?");
if (rat > 5 ){
    rat = 5;
} else if ( rat < 0) {
    rat = alert(`Thank you ${ratStar} for your time
    your rat is ${"* ".repeat(ratStar)}`)

console.log(theAnss.join(" | "));
}


