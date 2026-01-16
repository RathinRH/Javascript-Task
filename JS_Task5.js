// 1. Initialize the array
let numbers = [10, 5, 8, 3, 12, 6];
console.log("Initial array:", numbers);

// 2. Print the length of the array
console.log("Array length:", numbers.length);

// 3. Add the number 7 to the end of the array
numbers.push(7);
console.log("After adding 7:", numbers);

// 4. Remove the first element of the array
numbers.shift();
console.log("After removing first element:", numbers);

// 5. Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log("Sorted array (ascending):", numbers);

// 6. Reverse the array
numbers.reverse();
console.log("Reversed array:", numbers);

// 7. Check if the number 8 exists in the array
if (numbers.includes(8)) {
    console.log("Number 8 exists");
} else {
    console.log("Number 8 doesn't exist");
}

// 8. Find the index of the number 12
let indexOf12 = numbers.indexOf(12);
console.log("Index of 12:", indexOf12);

// 9. Create a new array by doubling each number
let doubledNumbers = numbers.map(num => num * 2);

// 10. Print the doubled numbers array
console.log("Doubled numbers array:", doubledNumbers);
