//--------planning out a an algorithmic approach-------------//

//*****/ 1. Sum of Two Digits -  Compute the sum of two single digit numbers.
//     input: two single digit numbers
//     output: the sum of these two numbers
//  We  start  from  this  ridiculously  simple  problem  to  show  you  thepipeline of reading the problem statement, designing an algorithm, im-plementing it, testing and debugging your program, and submitting it to the grading system.
//  Input format.Integersaandbon the same line (separated by a space).Output format.The sum ofaandb.Constraints.0<= a; b<=9.

//1.1  Implementing an AlgorithmFor this trivial problem, we will skip “Designing an algorithm” step andwill move right to the pseudocode.SumOfTwoDigits(a,b):returna+bSince the pseudocode does not specify how we inputaandb, below weprovide solutions inC++,Java, andPython3programming languages aswell as recommendations on compiling and running them. You can copy-and-paste the code to a file, compile/run it, test it on a few datasets, andthen submit (the source file, not the compiled executable) to the gradingsystem.  Needless to say,  we assume that you know the basics of one ofprogramming languages that we use in our grading system

const twoSum = (a, b) => a + b;

//********/

// 2.   Maximum Pairwise Product - Find the maximum product of two distinct num-bers in a sequence of non-negative integers.

/

