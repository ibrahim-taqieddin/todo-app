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




