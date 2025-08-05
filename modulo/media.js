// Objetivo : Arquivo responsavel por calcular e validar médias escolares
// Autor : Pedro Henrique
// 05/08/2025
// Versão: 1.0

function calculateAverage(grade1, grade2, grade3, grade4){
    let rate1 = Number(grade1)
    let rate2 = Number(grade2)
    let rate3 = Number(grade3)
    let rate4 = Number(grade4)

    let average = (grade1 + grade2 + grade3 + grade4) / 4

    return Number(average).toFixed(1)
}

console.log(calculateAverage(8, 10, 5, 8, 2))