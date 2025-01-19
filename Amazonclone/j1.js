function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}


const helloFunction = createHelloWorld();


const message = helloFunction();

console.log(message); 
