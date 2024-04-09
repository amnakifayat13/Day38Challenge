/* Iterate over a Map of student IDs and names, and log each pair to the console.*/
let students = new Map();
students.set(1, "Kifayat");
students.set(2, "Hayat");
students.set(3, "Mohib");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ".concat(name)));
});
