// Objetivo: Criar um sistema que realiza calculos de Médias escolares 
//           (Variaveis, Condicional, Funções)
// 01/08/2025 
// Autor : Pedro Henrique Oliveira da Silva
// Versão 1.0


// Declarando variavel que possuem mensagem de erro
const MESSAGE_ERROR_EMPTY = 'ERRO: ALL FILELDS MUST BE FILLED IN'
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: INVALID DATA. ONLY 0 TO 10 NUMBERS ARE ALLOWED'
const MESSAGE_NAN = 'ERRO: ALL GRADE FIELDS MUST BE FILLED IN WITH NUMBERS'
const MESSAGE_INVALID_NAME ='ERRO: ONLY LETTERS ARE PERMITED IN NAME FIELD '
// import biblioteca readline (Input Data)
var readline = require('readline')

// Criando um objeto de entrada e saida de dados no terminal
var inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Solicitar entrada de dados

inputData.question('Student Name: ', function(name){

    // Recebe o Argumento da function e guarda em uma variavel local
    let studentName = String(name).toUpperCase()
    
    //Entrada de dados nota1 
    inputData.question('Student grade 1: ', function(value1){
        let grade1 = value1

        //Entrada de dados grade2
        inputData.question('Student grade 2: ', function(value2){
            let grade2 = value2
            
            // Entrada de Dados grade3
            inputData.question('Student grade 3: ', function(value3){
                let grade3 = value3
                
                // entrada de dados grade4
                inputData.question('Student grade 4: ', function(value4){
                    let grade4 = value4

                    if(studentName == '' || grade1 == '' || grade2 == '' || grade3 == '' || grade4 == ''){
                        console.log(MESSAGE_ERROR_EMPTY)
                    }else if(!isNaN(studentName)){
                        console.log(MESSAGE_INVALID_NAME)
                    }else if(isNaN(grade1)  || isNaN(grade2)  || isNaN(grade3)  || isNaN(grade4) ) {
                        console.log(MESSAGE_NAN)    
                    }else if(Number(grade1) < 0 || Number(grade1) > 10 || Number(grade2) < 0 || Number(grade2) > 10 || Number(grade3) < 0 || Number(grade3) > 10 || Number(grade4) < 0 || Number(grade4) > 10){   
                        console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                        }else{
                            let average = (Number(grade1) + Number(grade2) + Number(grade3) + Number(grade4)) /4
                            let studentStatus
                            if(average >= 7 && average <= 10){
                                studentStatus = 'Approved'
                            }else if(average < 7 && average >= 5){
                                studentStatus="Exam"
                            }else if (average < 5 && average >= 0){
                                studentStatus = "Failed"
                            }
                            console.log (`The student ${studentName} got ${average.toFixed(1)} in his final avarege ${studentStatus}`)
                        }
                })

            })
        })
    })
})