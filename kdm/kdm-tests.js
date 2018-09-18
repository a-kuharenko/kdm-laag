kdm = require("./kdm-lib")
function test3(A,B,C){
    if(JSON.stringify(kdm.Or(A,kdm.And(B,C))) == JSON.stringify(kdm.And(kdm.Or(A,B),kdm.Or(A,C)))){
        console.log("test 3a passed")
        kdm.matrixPrinter(kdm.Or(A,kdm.And(B,C)))
    }else
    {
        console.log("test 3a failed")
        kdm.matrixPrinter(kdm.Or(A,kdm.And(B,C)))
        console.log("")
        kdm.matrixPrinter(kdm.And(kdm.Or(A,B),kdm.Or(A,C)))
        return(false)
    }
    if(JSON.stringify(kdm.And(A,kdm.Or(B,C))) == JSON.stringify(kdm.Or(kdm.And(A,B),kdm.And(A,C)))){
        console.log("test 3b passed")
        kdm.matrixPrinter(kdm.And(A,kdm.Or(B,C)))
    }else
    {
        console.log("test 3b failed")
        kdm.matrixPrinter(kdm.And(A,kdm.Or(B,C)))
        console.log("")
        kdm.matrixPrinter(kdm.Or(kdm.And(A,B),kdm.And(A,C)))
        return(false)
    }
    return(true)
}
function test8(A){
    if(JSON.stringify(kdm.Or(A,A)) == JSON.stringify(A)){
        console.log("test 8a passed")
        kdm.matrixPrinter(kdm.Or(A,A))
    }else
    {
        console.log("test 8a failed")
        kdm.matrixPrinter(kdm.Or(A,A))
        console.log("")
        kdm.matrixPrinter(A)
        return(false)
    }
    if(JSON.stringify(kdm.And(A,A)) == JSON.stringify(A)){
        console.log("test 8b passed")
        kdm.matrixPrinter(kdm.And(A,A))
    }else
    {
        console.log("test 8b failed")
        kdm.matrixPrinter(kdm.And(A,A))
        console.log("")
        kdm.matrixPrinter(A)
        return(false)
    }
    return(true)
}
function test10(A,B){
    if(JSON.stringify(kdm.Not(kdm.And(A,B))) == JSON.stringify(kdm.Or(kdm.Not(A),kdm.Not(B)))){
        console.log("test 10a passed")
        kdm.matrixPrinter(kdm.Not(kdm.And(A,B)))
    }else
    {
        console.log("test 10a failed")
        kdm.matrixPrinter(kdm.Not(kdm.And(A,B)))
        console.log("")
        kdm.matrixPrinter(kdm.Or(kdm.Not(A),kdm.Not(B)))
        return(false)
    }
    if(JSON.stringify(kdm.Not(kdm.Or(A,B))) == JSON.stringify(kdm.And(kdm.Not(A),kdm.Not(B)))){
        console.log("test 10b passed")
        kdm.matrixPrinter(kdm.Not(kdm.Or(A,B)))
    }else
    {
        console.log("test 10b failed")
        kdm.matrixPrinter(kdm.Not(kdm.Or(A,B)))
        console.log("")
        kdm.matrixPrinter(kdm.And(kdm.Not(A),kdm.Not(B)))
        return(false)
    }
    return(true)
}
function test23(A,B){
    if(JSON.stringify(kdm.Not(kdm.Xor(A,B))) == JSON.stringify(kdm.Or(kdm.And(A,B),kdm.And(kdm.Not(A),kdm.Not(B))))){
        console.log("test 23 passed")
        kdm.matrixPrinter(kdm.Not(kdm.Xor(A,B)))
    }else
    {
        console.log("test 23 failed")
        kdm.matrixPrinter(kdm.Not(kdm.Xor(A,B)))
        console.log("")
        kdm.matrixPrinter(kdm.Or(kdm.And(A,B),kdm.And(kdm.Not(A),kdm.Not(B))))
        return(false)
    }
    return(true)
}
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
test3(A,B,C)
test8(A)
test10(A,B)
test23(A,B)