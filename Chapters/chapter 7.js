// EVENTS in JS 
// the change in the state of an object is know as Event
// events are fired to modify code of interesting chnges that may affect the code execution

// Mouse events(click,double click ,etc);
// Keyboard events(keypress,keyup,keydown);
// Form events(submit,etc);
// Print events and many more
// SYSNTAX
// node.event=()=>{
//   //handle here
// }
// let btn1=document.querySelector('#btn1');
// btn1.onclick=()=>{
//     console.log('btn1 was clicked');
//     let a=25;
//     a++;
//     console.log(a);
// }

// Hum agr inline eventhandler likha hai or JS wala event toh priority JS wale ko di jaegi 
// or multiple same event handlers hai toh jo last me onclick wala event handler hoga vo chalega 

// EVENTS Object
// it is a special object that has details about the event
// all the event handlers have access to the event objects prop and methods
// node.event=(e)=>{
//     //handle here
// }
// let btn1=document.querySelector('#btn1');
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// EVENTS LISTNERS
// node.addEventListner(event,callback);
// node.removeEventListner(event,callBack);


// let btn1=document.querySelector('#btn1');
// btn1.addEventListener('click',(e)=>{
//     console.log("button was clicked")
//     console.log(e);
// });
 
// const handler2=()=>{

//     console.log("button one clicked--handler2");

// };
// btn1.addEventListener("click",handler2);
// btn1.removeEventListener("click",handler2);
// create a toggle button when click dark mode is applied and clicked again then light mode
let modeButton=document.querySelector('#mode');
let currMode="light";
modeButton.addEventListener('click',()=>{
    if(currMode==='light'){
        currMode='dark';
        document.querySelector('body').style.backgroundColor='black';

    }
    else{
        currMode='light';
        document.querySelector('body').style.backgroundColor='white';
    }
    console.log(currMode);
});


