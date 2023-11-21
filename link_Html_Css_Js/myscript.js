// prompt , alert and confirm in js and write text in DOM under body tag
console.log("script link succesfully");
let names = prompt("enter your Name: ");
let a = confirm("do you want to write in Dom"); //return true or false
console.log(a);
if (a){
    document.write(names)   //to write data under body tag
}
alert(`Welcome ${names} `);

//get dom element data throuh innerHTML and outerHTML
let b = first.innerHTML
let c = first.outerHTML
console.log(b,c);

// change innetHTML
first.innerHTML = "heading changed by js through innerhtml properties"