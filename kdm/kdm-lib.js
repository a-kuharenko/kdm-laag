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
//class syntax
class Matrix{
    constructor(arr){
        this.arr = arr 
    }
    and(matrix){
        return (new Matrix(And(this.arr,matrix.arr)))
    }
    or(matrix){
        return (new Matrix(Or(this.arr,matrix.arr)))
    }
    xor(matrix){
        return (new Matrix(Xor(this.arr,matrix.arr)))
    }
    def(matrix){
        return (new Matrix(Def(this.arr,matrix.arr)))
    }
}
function not(matrix){
    return(new Matrix(Not(matrix.arr)))
}
module.exports.matrixPrinter = matrixPrinter
module.exports.matrixCompare = matrixCompare
module.exports.Not = Not
module.exports.And = And
module.exports.Or = Or
module.exports.Xor = Xor
module.exports.Dif = Dif
module.exports.findSampleAB = findSampleAB
module.exports.Matrix = Matrix
module.exports.not = not