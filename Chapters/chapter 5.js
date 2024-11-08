/*FUNCTIONS and METHODS in JS ::

block of code to perform a specifc task ,can be invoked whenever we needed
Syntax:
function functionName(){
    //do some work
}

function functionName(param1,param2){
    //do some work
}

//calling a function : 
functionName()

it prevents from us redundancy

function sum(x,y){
    //local variables =>scope varaible  ( function params=>like local varaibales of function)
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);


ArrowFunction =>compact way of writting the function

function sum1(a,b){
    return a+b;
}
function multiply(x,y){
    return x*y;
}

const sum=(a,b)=>{
    return a+b;
}*/

/*create a function using 'function' keyword that takes strings as an arguements and return the number of vowels of a strings

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==='a'|| char==='e',char==='i',char==='o',char==='u'){
            count++;
        }
    }
    return count;
}

const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char==='a'|| char==='e',char==='i',char==='o',char==='u'){
            count++;
        }
    }
    return count;

}

//jaha bhi hume kisi function me callback dikhe toh vo humara higher oder hota hia jaise FOR EACH loop ek higher
//order hai so we conclude
the highherorder functions are the methods in JS either take another function as a parameter or they return another function */