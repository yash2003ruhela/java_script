/*Loops in javaScript
for(let count=1;count<5;count++){
    console.log("yash ");
}

let i=1;
while(i<=5){
    console.log("i +", i);
    i++;
}

for-of  yeh hum arrays or strings ke liye use krte hai 
for-in  yeh hum ojects or arrays ke liye use krte hai (REMEMBER)
let str="yash ruhela";
for(let i of str){
    console.log("i = " ,i);
}

let student={
    name:"yash ruhela",
    age:22,
    isPass:true,

};
for(let key in student){
    console.log("KEY = ", key, "VALUE = ",student[key]);
}*/
/*Strings in JS 
let str="yash";
let str 1='yash';
str.length;
str[i];

Templates Literals:
let obj={
    item:"pen",
    price:300,
};
let output=`the cost of ${obj.item} is ${obj.price} ruppess`
console.log(output);
let specialString=`this is a template string`;
console.log(specialString);
${expression}=>this is a string interpolation(REMEMBER);

Escape Characters:
\n , \t 

Strings Methods:
str.toUpperCase();
str.toLowerCase();
str.trim();
str.slice(start,end?);
str1.concat(str2);
str.replace(searchVal,newVal);
str.charAt(index);

let str='01234567';
console.log(str.slice(1,5));*/

/*Practice question :
prompt the user to enter their full name .generate a username for them based on the input. start username with
@,followed by their full name and ending with fullname lengthh.
ex=>user name="yashruhela", username should be "@yashruhela10"; 


let fullName=prompt("enter your full name without spaces");
let userName="@" + fullName + fullName.length;
console.log(userName);*/
