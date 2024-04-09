/* Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.*/
let countries1 = new Map();
countries1.set("PAkistan", "Islamabad");
countries1.set("France", "Paris");
countries1.set("Japan", "Tokyo");
console.log(countries1);
function CapitalOfCanada(countries1) {
    if (countries1.has("Canada")) {
        console.log(`The capital of Canada is ${countries1.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
CapitalOfCanada(countries1);
