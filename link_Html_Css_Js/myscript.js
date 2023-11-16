console.log("script link succesfully");
let names = prompt("enter your Name: ");
let a = confirm("do you want to write in Dom"); //return true or false
console.log(a);
if (a){
    document.write(names)   //to write data under body tag
}
alert(`Welcome ${names} `);