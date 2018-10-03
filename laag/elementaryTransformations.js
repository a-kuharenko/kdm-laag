'use strict'
let matrix = [[2,-5,1,1],
              [1,1,-1,2],
              [1,-13,5,-4]]
let input = process.stdin
input.setEncoding('utf-8')
function matrixPrinter(matrix){
    let i = 0
    while(matrix.length>i){
        console.log(matrix[i])
        i++
    }
}
function elemTransform(matrix,base,adder,mult,op = "+"){
    for(let i = 0;i < matrix[base-1].length;i++){
        if(op === "+"){matrix[base-1][i] = matrix[base-1][i] + mult * matrix[adder-1][i]}
        else{matrix[base-1][i] = matrix[base-1][i] - mult * matrix[adder-1][i]}
    }
    return matrix;
}
matrixPrinter(matrix)
input.on('data', function (data) {
    let op = "+"
    let mult = 1
    let adder = 0
    for(let i = 0;i < data.length;i++){
        if(data[i] === "+"){op = "+";break}
        if(data[i] === "-"){op = "-";break}
    }
    const sum = data.split(op)
    for(let i = 0;i < data.length;i++){
        if(data[i] === "*"){
            const multiplication = sum[1].split("*")
            mult = parseFloat(multiplication[0])
            adder = parseInt(multiplication[1])
            break;}
        adder = parseInt(sum[1])
    }
    const base = parseInt(sum[0])
    elemTransform(matrix,base,adder,mult,op)
    matrixPrinter(matrix)
})