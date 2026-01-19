function greet(){
    console.log("Hello World");
}

greet();


const add =(a,b)=>a+b;


function greet (name =  "Guest"){
    console.log(`Hello ${name}`);

}
greet();



function checkAge(age){
    if(age<18) return " Too Young";

    return  "Allowed";

}


function sayHi(){
    return "Hi";
}

function greet (fn){
    console.log(fn());

}
greet(sayHi);


function amit (opertion){
    return function(a,b){
        return opertion(a,b);
    };
}

const add = (a,b)=> a+b;

const calcAdd = calculator)(add);
console.log(calcAdd(5,3));


