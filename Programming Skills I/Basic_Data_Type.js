// 1523. Count Odd Numbers in an Interval Range
    // Given two non-negative integers low and high. 
    // Return the count of odd numbers between low and high (inclusive).
var countOdds = function(low, high) {
    count = 0;
    for (let i = low; i <= high; i++) {
        if (i % 2 !== 0) {
            count += 1;
        }
    }
    return count;
};



// 1491. Average Salary Excluding the Minimum and Maximum Salary
    // You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
    // Return the average salary of employees excluding the minimum and maximum salary. 
    // Answers within 10-5 of the actual answer will be accepted.
var average = function(salary) {
    let count = 0;
    let sum = 0;
    for (let i of salary) {
        if (i !== Math.max(...salary) && i !== Math.min(...salary)) {
            count += 1;
            sum += i;
        }
    }
    return sum / count;
};