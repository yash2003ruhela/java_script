// classes and objects in JS 
// Prototypes in js 
// A javascript object is an entity having state and behaviour(properties and methods)
// JS properties has a special type of property called Prototypes
// we can set prototype using ----proto---

// (* id pbject and prototype have same method ,object's method will be used)

// const employee={
//     calTax(){
//         console.log("tax rate is 10percent");
//     },
// };
// const karanArjun={
//     salary:2000,
//     calTax(){
//         console.log("the tax rate is 20percent");
//     },
// };
// const karanArjun2={
//     salary:20000,
// };
// const karanArjun3={
//     salary:200000,
// };
// const karanArjun4={
//     salary:2000000,
// };
//karanArjun__proto__=employee;// ab jaise yaha do same method hogye toh fir object wala method hi chalega us specific ke liye
// karanArjun2__proto__=employee;
// karanArjun3__proto__=employee;
// karanArjun4__proto__=employee;

//CLASSES IN JS 
// class is a program template for creating objects .
// those object will have some state (variables)and some behaviour (funnctions) inside it
// humari jo class hoti hai vo actually us object ke liye blueprint hota hai


// class MyClass{
//     constructor(){

//     }
//     MyMethod(){}
// }
// let myObj=new MyClass();
// //EXAMPLE
// class ToyotaCar{
//     constructor(brand,milage){
//         this.brandName=brand;
//         this.milage=milage;

//     }

//     stop(){
//         console.log("stop");
//     };
//     start(){
//         console.log("start");
//     }
//     // setBrand(brand){
//     //     this.brandName=brand
//     // };
// }
// let fortuner=new ToyotaCar("fortuner",10);//constuctor
// // fortuner.setBrand("fortuner");
// console.log(fortuner); 

//INHERITANCE
it is a passing down the properties and method fromparent class to child class by using extends key word
if child and parent have same method,child's
method will be used [which is called method overriding]

//SUPER keyword me kya hota hai child class me hume parent wala ke obj call krna ho toh super keyword use krte hai

ques 1=>
you are creating a website for your collge .create a class user with 2 prop.name and emailit also has a methodcalled viewData(0)
that allows user to view website data
ques 2=>
creat a adminas a new class which inherits from user add a new method called editData to admin that allows it to edit
website data

let Data="secret info";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("website data",Data);
    };
}
class Admin extends User{
    constructor(name,email){
        super(name,email)

    }
    editData(){
        Data="some new value"
    }
}
let student1=new User("yash","abcd@MediaList.com");
let student2=new User("yashruhela","aaabcd@MediaList.com");
let admin1=new Admin("aaaaa","www@gamil.com");

//ERROR AND HANDLING
