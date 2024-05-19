function performArrayOperations(array1, array2) {
    
    let concatenatedArray = array1.concat(array2);
    console.log("Concatenated array:", concatenatedArray);

    let extractedArray = concatenatedArray.slice(2, 5);
    console.log("Extracted portion:", extractedArray);

    let indexOf7 = extractedArray.indexOf(7);
    if (indexOf7 !== -1) {
        console.log("Index of number 7:", indexOf7);
    } else {
        console.log("Number 7 not found.");
    }

    if (array1.includes(10)) {
        console.log("Number 10 is present in array1.");
    } else {
        console.log("Number 10 is not present in array1.");
    }

    let joinedString = extractedArray.join("-");
    console.log("Joined string:", `"${joinedString}"`);

    extractedArray.reverse();
    console.log("Reversed array:", extractedArray);

    let sumOfArray2 = array2.reduce((sum, num) => sum + num, 0);
    console.log("Sum of array2:", sumOfArray2);

    array1.sort((a, b) => a - b);
    console.log("Sorted array1:", array1);
}


