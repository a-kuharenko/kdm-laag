kdm = require("./kdm-lib")
let A = [[0,0,0,0,0,0,0],
         [0,0,1,1,1,0,0],
         [0,0,1,1,1,0,0],
         [0,0,1,1,1,0,0],
         [0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0]]
let B = [[0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0],
         [0,1,1,1,0,0,0],
         [0,1,1,1,0,0,0],
         [0,1,1,1,0,0,0],
         [0,0,0,0,0,0,0]]
let C = [[0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0],
         [0,0,0,1,1,1,0],
         [0,0,0,1,1,1,0],
         [0,0,0,1,1,1,0],
         [0,0,0,0,0,0,0]]
//example
let task1 = kdm.Not(kdm.And(kdm.Not(kdm.And(kdm.Not(kdm.And(kdm.Not(kdm.And(A,C)),B)),kdm.Not(B))),A))
console.log("Task 1:")
console.log(kdm.findSampleAB(task1,A,B))
let task2 = kdm.Not(kdm.Or(kdm.Not(kdm.And(kdm.Not(kdm.Or(A,B)),kdm.Not(B))),kdm.Not(kdm.And(A,B))))
console.log("Task 2:")
kdm.matrixPrinter(task2)
//example in classes
console.log("In classes:")
let a = new kdm.Matrix(A)
let b = new kdm.Matrix(B)
let c = new kdm.Matrix(C)
let not = kdm.not
console.log("Task 1:")
let task1class = not(not(not(not(a.and(c)).and(b)).and(not(b))).and(a))
console.log(kdm.findSampleAB(task1class.arr,a.arr,b.arr))
console.log("Task 1:")
let task2class = not(not(not(a.or(b)).and(not(b))).or(not(b.and(a))))
kdm.matrixPrinter(task2class.arr)