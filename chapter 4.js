 /*Arrays in JSthis is a mutable array in js only (collection of items) Linear fashion  create Array 

let array=["yash","ruhela",23,100,"true"]

 
let marks=[20,30,45,21,33];
let heroes=["tony","spiderman","panther","seizer"];
console.log(heroes);
console.log(typeof marks);
console.log(marks);
console.log(marks.length);

for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

for(let hero of heroes){
    console.log(hero);
}

 practice ques 1:
for a given array withnmarks of students [87,90,100,23,20];find the average marks of the students;*/
/*let arr=[87,90,100,23,20];
let sum=0;
for(let val of arr){
    sum+=val;
}
let avg=sum/arr.length;
console.log(`the avg marks of entire class is= ${avg}`);

Array Methods
Push() => att to end 
pop()=>delete from end and return
toString()=> conver array to String
concat()=>to join multiples array and return array
unshift()=>add to start 
shift()=>delete from start
slice()=>return a piece of array , or orignal array me chnage n krta 
slice(strtindx,endindx-1)
splice()=>change orignal array (add,remove,replace)
splice(startIndx,delCount,newEl)


let veggies=["patatoes","leachi","chips"];
veggies.push("takatak");
console.log(veggies);
console.log(veggies.toString());

let marvels=["iron man","spider","dr.strange" ,"antman"];
let dc=["batman","wander women"];
let indianheroes=["krish","raone"];
console.log(marvels.concat(dc));
console.log(dc.concat(marvels,indianheroes));
marvels.unshift("antman");
marvels.shift("iron man");
marvels.slice(1,3);*/



// ques=create an array store companies Blooomberg,Microsoft, Uber,Google,IBM,TCS,Netflix
// remove the first company from an array
// remove uber and add ola
// add amazon at the end

let arr=["Boomberg","Microsoft","Uber","Google","IBM","TCS","Netflix"];

arr.shift();
console.log(arr);
arr.splice(2,1,"Ola");
console.log(arr);
arr.push("Amazon");
console.log(arr);