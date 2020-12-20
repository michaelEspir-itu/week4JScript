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

let spellMyName = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
spellMyName('Michael','Espiritu');

const processSplicedValue =(array,carValue,callSpliceFunction) =>{
const result=array.splice(carValue,1);
callSpliceFunction(result);
}
const secondarray=['orange','blue','red'];
processSplicedValue(secondarray,2,console.log);
processSplicedValue([4,5,6],2,alert);
processSplicedValue ([4,5,6],2,()=>result);

processSplicedValue([4,5,6],2,spellMyName);
console.log(processSplicedValue);


 

    


