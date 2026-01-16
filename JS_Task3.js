function calculateAge(birthYear, currentYear) {

    // Convert inputs to numbers
    birthYear = Number(birthYear);
    currentYear = Number(currentYear);

    // Validate inputs
    if (isNaN(birthYear) || isNaN(currentYear)) {
        return "Invalid input: Please enter valid years.";
    }

    // Check logical condition
    if (currentYear < birthYear) {
        return "Invalid input: Current year cannot be less than birth year.";
    }

    let age = currentYear - birthYear;
    return `You are ${age} years old.`;
}
