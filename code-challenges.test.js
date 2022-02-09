// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Psudeo Code:
// Create test enviornment
// Return array with sentence with each person's name capitalized
// Run test to get green 


// a) Create a test with an expect statement using the variable provided.

Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("nameCapitalized", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    x
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(nameCapitalized(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// b) Create the function that makes the test pass.

// Psudeo Code
// Take in an array of objects
// Declare a function that names an array of names.
// Return an array with stentence with each person's name capitalized. 
// Use .map to iterate through array and use .split in desending order
// Use .uppercase to Capitalized
// Use .join

const nameCapitalized = (array) => {
  return array.map(nameDesc => {
    let name = nameDesc.name.split(" ").map(value => value.replace(value[0], value[0].toUpperCase()))
    let fullname = name.join(" ")
    let desc = nameDesc.occupation
    let nameTitle = `${fullname} is ${desc}.`
    return nameTitle
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Psudeo Code:
// Create test enviornment

// a) Create a test with an expect statement using the variables provided.

describe("mixedDataWithRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

    expect(mixedDataWithRemainders(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(mixedDataWithRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// b) Create the function that makes the test pass.

// Take in an mixed data array as a parameter
// Return array with remainders of numbers divided by 3
// Use .map to iterate through array in desending order
// Use .filter to iterate through array, returns truthy values and subset of array

const mixedDatawithRemainders = (array) => {
  return array.filter((value) => typeof value === "number")
    .map((x) => {
      return x % 3;
    });
};

//  --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfNumbersCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]

    expect(sumOfNumbersCubed(cubeAndSum1)).toEqual(99);
    expect(sumOfNumbersCubed(cubeAndSum1)).toEqual(1125);

  });
});

// b) Create the function that makes the test pass. 

// Create function that takes in array of numbers
// Return the array in numbers cubed
// Use.map to iterate through the array
// Use .reduce to loop through each step of the array and sum of all the previous steps

const sumOfNumbersCubed = (array) => {
  return array.map((value) => value ** 3).reduce((a, b) => a + b);
}