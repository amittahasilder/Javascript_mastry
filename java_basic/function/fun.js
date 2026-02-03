function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));


const greet = function() {
  return "Hi there!";
};
console.log(greet());


function add(v1, v2){
    console.log(v1,v2);
}
add();


function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));