// A documentação oficial:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

// The do-while repetition statement is similar to the while statement. In the while, the program tests the loop-continuation
// condition at the beginning of the loop, *before* executing the loop’s body; if the condition is false, the body never
// executes.

// The do-while, however,tests the loop-continuation condition AFTER executing the loop’s body; therefore, the body
// always executes at least once.

let counter = 1; // initialize counter
// let counter = 30; // do-while will execute at least once, even that condition evaluates to false
do {

    console.log(`Counter=${counter}`);
    ++counter;
} while (counter <= 10); // semicolon ends do-while