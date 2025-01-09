let name = "John Doe";
console.log("Name: " + name);

let age = 30;
console.log("Age: " + age);

let isStudent = true;
console.log("Is student: " + isStudent);

let undefinedVariable;
console.log("Undefined variable: " + undefinedVariable);

let nullVariable = null;
console.log("Null variable: " + nullVariable);

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log("Person: " + JSON.stringify(person));

let colors = ["Red", "Green", "Blue"];
console.log("Colors: " + colors.join(", "));

const Bk = ( a) => {
    setInterval(() => {
        console.log(a);
    }, 100)
}


oneshot("Bharath");