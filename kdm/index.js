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
console.log(kdm.findSampleAB(kdm.Xor(kdm.Xor(kdm.And(A,kdm.Not(B)),kdm.And(kdm.Not(A),B)),kdm.And(kdm.Not(A),kdm.Not(B))),A,B))
console.log(kdm.findSampleAB(kdm.Not(kdm.Xor(kdm.Not(kdm.Xor(A,B)),kdm.Not(A))),A,B))