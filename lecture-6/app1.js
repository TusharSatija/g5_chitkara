console.log("one")
setTimeout(()=>{
    console.log("one.one");
},2000);
console.log("two");
setTimeout(()=>{
    console.log("two.one");
},0);
console.log("three");
setTimeout(()=>{
    console.log("four");
},100);