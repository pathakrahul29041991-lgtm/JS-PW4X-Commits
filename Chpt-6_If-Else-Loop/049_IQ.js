// ## JavaScript Coding Interview Question: Student Grade Calculator



// Beginner

// JavaScript

// Conditional Statements



// ### Problem Statement

// Write a JavaScript program that accepts a student's exam score and determines the corresponding grade using conditional statements (`if`, `else if`, and `else`).

// The score must be between 0 and 100 (inclusive).

// ### Grading Criteria

// | Score Range | Grade | Performance       |
// | ----------- | ----- | ----------------- |
// | 91–100      | A     | Excellent         |
// | 81–90       | B     | Very Good         |
// | 71–80       | C     | Good              |
// | 61–70       | D     | Average           |
// | 50–60       | E     | Needs Improvement |
// | 0–49        | F     | Fail              |

// ### Requirements

// 1. Accept a student's score as input.
// 2. Use `if`, `else if`, and `else` statements to determine the grade.
// 3. Print the student's score and corresponding grade.
// 4. If the score is less than 0 or greater than 100, display `"Invalid Score"`.
// 5. Handle boundary values correctly, such as `0`, `49`, `50`, `60`, `70`, `80`, `90`, and `100`.

// ### Sample Input and Output

// ```
// Input: 95
// Output: Grade A - Excellent

// Input: 85
// Output: Grade B - Very Good

// Input: 75
// Output: Grade C - Good

// Input: 65
// Output: Grade D - Average

// Input: 55
// Output: Grade E - Needs Improvement

// Input: 35
// Output: Grade F - Fail

// Input: 105
// Output: Invalid Score
// ```

let marks = 66;

if (marks > 100 || marks < 0) {
    console.log("You have entered invalid marks");
}
else {

    if (marks > 35 && marks <= 40) {
        console.log("You have passed but need improvement");
    }
    else if (marks > 40 && marks < 50) {
        console.log("You have passed with below average score");
    }
    else if (marks > 50 && marks <= 65) {
        console.log("You have passed with average score");
    }
    else if (marks > 65 && marks <= 75) {
        console.log("You have passed with above average score");
    }
    else if (marks > 75 && marks <= 85) {
        console.log("You have passed with distinction");
    }
    else if (marks > 85 && marks <= 90) {
        console.log("You have passed with Second Class");
    }
    else if (marks > 90 && marks <= 100) {
        console.log("You have passed with First Class");
    }
}