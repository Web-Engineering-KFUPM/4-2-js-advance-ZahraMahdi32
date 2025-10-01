/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const student = {
  firstName: "Zahra",
  lastName: "Aljaroudi",
  _gpa: 3.6,
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  get gpa() {
    return this._gpa;
  },
  set gpa(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      console.log("GPA must be a number.");
      return;
    }
    if (value < 0 || value > 4) {
      console.log("Invalid GPA. It must be between 0.0 and 4.0.");
      return;
    }
    this._gpa = value;
  }
};
console.log("TODO-1 → fullName:", student.fullName);
console.log("TODO-1 → initial GPA:", student.gpa);
student.gpa = 3.9; // valid
console.log("TODO-1 → updated GPA:", student.gpa);
student.gpa = 5.0;
// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courseMap = {
  SWE363: "Web Engineering & Development",
  COE301: "Computer Architecture (MIPS & Assembly)",
  ICS253: "Computer Networks"
};
console.log("TODO-2 → course map listing:");
for (const code in courseMap) {
  console.log(`${code} → ${courseMap[code]}`);
}
// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const phrase = "Hello, World!";
console.log("TODO-3 → length:", phrase.length);
console.log("TODO-3 → charAt(0):", phrase.charAt(0));
console.log("TODO-3 → charAt(phrase.length - 1):", phrase.charAt(phrase.length - 1));

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const now = new Date();
const day = now.getDate();
const monthIndex = now.getMonth(); // 0–11
const year = now.getFullYear();
console.log("TODO-4 → day:", day, "| monthIndex (0–11):", monthIndex, "| year:", year);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const numbers = [12, 7, 45, -3, 19, 0, 88, 23, 61, 5];
const minVal = Math.min(...numbers);
const maxVal = Math.max(...numbers);
console.log("TODO-5 → numbers:", numbers);
console.log("TODO-5 → min:", minVal, "| max:", maxVal);
// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function maxNonEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must be non-empty.");
  }
  return Math.max(...arr);
}
try {
  console.log("TODO-6 → trying with empty array:");
  const result = maxNonEmpty([]); // should throw
  console.log("Result (should not print):", result);
} catch (e) {
  console.log("TODO-6 → caught error:", e.message);
} finally {
  console.log("TODO-6 → finally block executed.");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/;
const matched = [];
words.forEach((w) => {
  if (pattern.test(w)) {
    console.log(`${w} matches!`);
    matched.push(w);
  }
});
console.log("TODO-7 → matched words:", matched);
// End of Advance JavaScript Lab — good luck!
