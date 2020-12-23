let writeSomeoneName = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
writeSomeoneName('Rebekah Ann','Espiritu');

let createEmployeeName =(firstName, lastName) => console.log(`${firstName}  ${lastName}`);
createEmployeeName('Miko','Espiritu');

setTimeout(() =>{
     alert('Time is up!');
},5000);


let askAreWeThereYet= setInterval(() =>{
    console.log('Are we there yet?');
    },6000);

let spellMyName = (firstName, lastName) => {let result = (`${firstName} ${lastName}`);
console.log(result);
return result;
}
let value = spellMyName("Michael","Espiritu");
console.log(value);
const processSplicedValue =(array,carValue,callSpliceFunction) =>{
const result=array.splice(carValue,1);
callSpliceFunction(result);
return result;
}
const secondarray=['orange','blue','red'];
processSplicedValue(secondarray,2,console.log);
processSplicedValue([4,5,6],2,alert);
processSplicedValue([4,5,6],2,value=>{alert(value)});

spellMyName(value); 
console.log("This is the character value of my name",value.length);

let a =['toyota','bmw','honda'];
let printCarName = a => { console.log (a);}
    
processSplicedValue(a,2,printCarName);

 

    


