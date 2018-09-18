'use strict';
function matrixPrinter(matrix){
    let i = 0
    while(matrix.length>i){
        console.log(matrix[i])
        i++
    }
}
function matrixCompare(matrix1,matrix2){
    if(JSON.stringify(matrix1) == JSON.stringify(matrix2)){
        return true
    }else{
        return false
    }
}
function Not(matrix){
    let i = 0
    let matrixR = JSON.parse(JSON.stringify(matrix))
    while(matrix.length>i){
        let j = 0
        while(matrix[i].length>j){
            matrixR[i][j] = (matrix[i][j]-1)*(matrix[i][j]-1)
            j++
        }
        i++
    }
    return(matrixR)
}
function And(matrix1,matrix2){
    let i = 0
    let matrixR = JSON.parse(JSON.stringify(matrix1))
    while(matrix1.length>i){
        let j = 0
        while(matrix1[i].length>j){
            matrixR[i][j]=matrix1[i][j]*matrix2[i][j]
            j++
        }
        i++
    }
    return(matrixR)
}
function Or(matrix1,matrix2){
    let i = 0
    let matrixR = JSON.parse(JSON.stringify(matrix1))
    while(matrix1.length>i){
        let j = 0
        while(matrix1[i].length>j){
            if(matrix1[i][j] == 1 || matrix2[i][j] == 1){
                matrixR[i][j] = 1
            }else{
                matrixR[i][j] = 0
            }
            j++
        }
        i++
    }
    return(matrixR)
}
function Xor(matrix1,matrix2){
    let i = 0
    let matrixR = JSON.parse(JSON.stringify(matrix1))
    while(matrix1.length>i){
        let j = 0
        while(matrix1[i].length>j){
            if(matrix1[i][j] == 1 ^ matrix2[i][j] == 1){
                matrixR[i][j] = 1
            }else{
                matrixR[i][j] = 0
            }
            j++
        }
        i++
    }
    return(matrixR)
}
function Dif(matrix1,matrix2){
    let i = 0
    let matrixR = JSON.parse(JSON.stringify(matrix1))
    while(matrix1.length>i){
        let j = 0
        while(matrix1[i].length>j){
            if(matrix1[i][j] == 1 && matrix2[i][j] == 0){
                matrixR[i][j] = 1
            }else{
                matrixR[i][j] = 0
            }
            j++
        }
        i++
    }
    return(matrixR)
}
function findSampleAB(matrix,A,B){
    if(matrixCompare(matrix,Not(A))){return "!A"}
    if(matrixCompare(matrix,Not(B))){return "!B"}
    if(matrixCompare(matrix,Or(A,B))){return "AuB"}
    if(matrixCompare(matrix,Not(Or(A,B)))){return "!(AuB)"}
    if(matrixCompare(matrix,And(A,B))){return "AnB"}
    if(matrixCompare(matrix,Not(And(A,B)))){return "!(AnB)"}
    if(matrixCompare(matrix,Xor(A,B))){return "A^B"}
    if(matrixCompare(matrix,Not(Xor(A,B)))){return "!(A^B)"}
    if(matrixCompare(matrix,Dif(A,B))){return "A/B"}
    if(matrixCompare(matrix,Not(Dif(A,B)))){return "!(A/B)"}
    if(matrixCompare(matrix,Dif(B,A))){return "B/A"}
    if(matrixCompare(matrix,Not(Dif(B,A)))){return "!(B/A)"}
    return false
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
//tests
function test3(A,B,C){
    if(JSON.stringify(Or(A,And(B,C))) == JSON.stringify(And(Or(A,B),Or(A,C)))){
        console.log("test 3a passed")
        matrixPrinter(Or(A,And(B,C)))
    }else
    {
        console.log("test 3a failed")
        matrixPrinter(Or(A,And(B,C)))
        console.log("")
        matrixPrinter(And(Or(A,B),Or(A,C)))
        return(false)
    }
    if(JSON.stringify(And(A,Or(B,C))) == JSON.stringify(Or(And(A,B),And(A,C)))){
        console.log("test 3b passed")
        matrixPrinter(And(A,Or(B,C)))
    }else
    {
        console.log("test 3b failed")
        matrixPrinter(And(A,Or(B,C)))
        console.log("")
        matrixPrinter(Or(And(A,B),And(A,C)))
        return(false)
    }
    return(true)
}
function test8(A){
    if(JSON.stringify(Or(A,A)) == JSON.stringify(A)){
        console.log("test 8a passed")
        matrixPrinter(Or(A,A))
    }else
    {
        console.log("test 8a failed")
        matrixPrinter(Or(A,A))
        console.log("")
        matrixPrinter(A)
        return(false)
    }
    if(JSON.stringify(And(A,A)) == JSON.stringify(A)){
        console.log("test 8b passed")
        matrixPrinter(And(A,A))
    }else
    {
        console.log("test 8b failed")
        matrixPrinter(And(A,A))
        console.log("")
        matrixPrinter(A)
        return(false)
    }
    return(true)
}
function test10(A,B){
    if(JSON.stringify(Not(And(A,B))) == JSON.stringify(Or(Not(A),Not(B)))){
        console.log("test 10a passed")
        matrixPrinter(Not(And(A,B)))
    }else
    {
        console.log("test 10a failed")
        matrixPrinter(Not(And(A,B)))
        console.log("")
        matrixPrinter(Or(Not(A),Not(B)))
        return(false)
    }
    if(JSON.stringify(Not(Or(A,B))) == JSON.stringify(And(Not(A),Not(B)))){
        console.log("test 10b passed")
        matrixPrinter(Not(Or(A,B)))
    }else
    {
        console.log("test 10b failed")
        matrixPrinter(Not(Or(A,B)))
        console.log("")
        matrixPrinter(And(Not(A),Not(B)))
        return(false)
    }
    return(true)
}
function test23(A,B){
    if(JSON.stringify(Not(Xor(A,B))) == JSON.stringify(Or(And(A,B),And(Not(A),Not(B))))){
        console.log("test 23 passed")
        matrixPrinter(Not(Xor(A,B)))
    }else
    {
        console.log("test 23 failed")
        matrixPrinter(Not(Xor(A,B)))
        console.log("")
        matrixPrinter(Or(And(A,B),And(Not(A),Not(B))))
        return(false)
    }
    return(true)
}
//test3(A,B,C)
//test8(A)
//test10(A,B)
//test23(A,B)
console.log(findSampleAB(Xor(Xor(And(A,Not(B)),And(Not(A),B)),And(Not(A),Not(B))),A,B))
console.log(findSampleAB(Not(Xor(Not(Xor(A,B)),Not(A))),A,B))