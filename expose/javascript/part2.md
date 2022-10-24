
1. 3, i is defined as var, as such, the final value of i is visible after the for-loop executes.
2. 150, discountedPrice is defined as var, the last value recorded in discountedPrice is visible after the for-loop executes.
3. 0, after the for-loop, finalPrice takes on the value it was defined with outside the for-loop.
4. [50, 100, 150], returns final array values of discounted after the for-loop because it is defined as var.
5. error, as i is only visible inside the for-loop
6. error, as discountedPrice is only visible in the the for-loop
7. 150, finalPrice is defined as let inside function discountedPrice, and is valid in the function. Takes last assigned value 150 after the for-loop.
8. [0, 0, 0], discounted is defined with let, takes intial value after the for-loop.
9. error, since i is defined with let, it becomes undefined after the for-loop.
10. error, length defined as const can not be assigned a value at run-time. It takes value at compile time. Hence, it becomes undefined.
11. [50, 100, 150], discounted is defined as const and is assigned values in the for-loop.
12. 
    1.  a) student.name;
    2.  b) student["Grad Year"];
    3.  c) student.greeting();
    4.  d) student["Favorite Teacher"].name;
    5.  e) student.courseload[0];
13. 
    1.  a) 32, converts 2 to string, then combines the two strings together.
    2.  b) 1, converts 2 to numerical value, then conducts numerical operation.
    3.  c) 3, converts null to 0, then conducts operation
    4.  d) 3null, converts null to string, then adds the two strings together.
    5.  e) 4, converts true to 1 since 3 is numerical value, then adds.
    6.  f) 0, both false and null have numerical values of 0, then added together.
    7.  g) 3undefined, converts undefined into a string, then combines the two strings together
    8.  h) NaN, undefined is not converted into a string, hence the operation is invalid, resulting in NaN.
14. 
    1.  a) True, converts 2 to numerical value, 2 is larger than 1, so true.
    2.  b) False, it compares 2 to 1, not 12. 2 is larger than 1, so false.
    3.  c) True, converts string 2 to number 2, 2 = 2, so true.
    4.  d) False, doesn't convert string 2 to number 2, number and string are not equal, so false.
    5.  e) False, true is converted to value of 1, 1 doesn't equal 2, so false.
    6.  f) True, any numerical input of function Boolean(), return value is true. True equals true, so true.
15.  == allows conversion of the two comparators, === doesn't allow the conversion of the two comparators.
16.  part2-question16.js
17.  callback function is not defined, it is defined later. Hence, newArr has inital value [].
18.  part2-question18.js
19.  Output: 1 4 3 (one second later) 2