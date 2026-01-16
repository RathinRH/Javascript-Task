// 1. Initialize the array
let names = [" John", "Jane", "Doe", "Alice", "Bob"];
console.log("Initial Names Array:", names);

// 2. Print all names (each on a new line)
console.log("Names list:");
names.forEach(name => {
    console.log(name.trim());
});

// 3. Add the name " Eve" to the end of the array
names.push(" Eve");
console.log("After adding Eve:", names);

// 4. Remove the name "Doe" from the array
names = names.filter(name => name.trim() !== "Doe");
console.log("After removing Doe:", names);

// 5. Sort the array alphabetically (after trimming spaces)
names.sort((a, b) => a.trim().localeCompare(b.trim()));
console.log("Sorted names:", names);

// 6. Check if the name "Alice" exists
let isAlicePresent = names.some(name => name.trim() === "Alice");

if (isAlicePresent) {
    console.log("Alice is present");
} else {
    console.log("Alice is not present");
}

// 7. Convert all names to uppercase and store in new array
let uppercaseNames = names.map(name => name.trim().toUpperCase());

// 8. Print the uppercaseNames array
console.log("Uppercase Names Array:", uppercaseNames);
