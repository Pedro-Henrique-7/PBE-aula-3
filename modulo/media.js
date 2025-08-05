// Objetivo : Arquivo responsavel por calcular e validar médias escolares
// Autor : Pedro Henrique
// 05/08/2025
// Versão: 1.0

//Função para retornar média escolar
function calculateAverage(grade1, grade2, grade3, grade4){
    let rate1 = Number(grade1)
    let rate2 = Number(grade2)
    let rate3 = Number(grade3)
    let rate4 = Number(grade4)

    let average = (rate1 + rate2 + rate3 + rate4)/4

    return Number(average).toFixed(1)
}


//Função para retornar status da média escolar
function verifyStatus(averageValue){
    
    let average = Number(averageValue)

    let studentStatus
    if(average >= 7 && average <= 10){
        studentStatus = 'Approved'
    }else if(average < 7 && average >= 5){
        studentStatus="Exam"
    }else if (average < 5 && average >= 0){
        studentStatus = "Failed"
    }

    if(studentStatus != undefined){
        return studentStatus
    }else{
        return false
    }
    
}

// let studentAverage = calculateAverage(8, 0, 9, 10,2)
// console.log(studentAverage)
// console.log(verifyStatus(studentAverage))

//permite tornar uma funçaõ publica, var, const, obj
module.exports ={
    calculateAverage,
    verifyStatus
}