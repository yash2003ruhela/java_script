// //DOM in JS(Document Object Model)m it is a tree like structure 
// // Three muskitiers of front end web dev
// // HTML , CSS , Logic(JS)

// // Window object=>the window object represents an open window in a browser .it is a browser object(not js) is
// // automatically created by the browser

// // it is a global object with lots of properties and methods


// // console.log("helo DOM ");
// // alert("hii welcome");
// // // window.alert("helo");
// //window.document => YEH HUME PURE html Ka code dedeta hai
// HTML ko JS me access kr sakte hai window ke andar document me aata hai 
// // hum JS me dynamically change kr sakte hai 


// #DOM Manipulation:
// 1=>selection with id : document.getElementById("myId");
// 2=>selection with class : document.getElementByClass("myclass");
// 3=>selection with tag : document.getElementByTag("p");

// //hum script tag ko kabhi bhi body ke upper nh krte kyu ki jab hum
// //upper likhenge fir hum usko access krenge toh null print hoga DOM se krenge tab isi mare
// //body ke just before end me hi likhte hai (console.dir(document.body));
// id ko css me # se krte hai #heading
// const heading=document.getElementById("heading"); 
// const heading=document.getElementByClass("heading");//yeh humara return krta hai html collections or like an array
// const heading=document.getElementByTag("heading"); 
// console.dir(heading)

// Query Selector:
// document.querySelectorAll("tage/class/id"); jab hume first ele me chaiyeh toh sirf querySelector('p');
// or jab hume sare paragraph element chaiyeh toh querySelectorAll('p'); 
// It list return a nodeList

// PROPERTIES:IMPORTANT
// 1=>tagName=returns tag for element nodes
// 2=>innerText=>returns the text content of the element and all its children
// 3=>innerHTML=>returns the plain text or HTML contents in the element
// 4=>textContent=>returns textual content even for hidden elements

//Create a H2 headingelementwith text-hello java script .append from apna college students to this text using js
// let h2=document.querySelector('h2');
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + " apna college";

// let divs=document.querySelectorAll('.box');
// let idx=1;
// for(div of divs){
//     div.innerText=`new value ${idx}`;
//     idx++;
// }

// ab bari hai add new element kaise krenge 
// let el=document.createElement('div');
// let newButton=document.createElement('button');
//  newButton.innerText="this is a button";
// console.log(newButton);
// let div=document.querySelector('div');
// div.append(newButton);
// div.prepend(newButton);

// Node.append(el)
// Node.prepend(el);
// Node.before(el);
// Node.after(el);
// Node.remove(el);
// appendChild() and removeChild()
// classList 


