//prompt user to input student marks and grade them to 'A','B','C','D' etc

const prompt=require("prompt-sync")();

function studentMarks(){
    const input = prompt('Please enter student marks');
    let grade;

        if (typeof(input) === 'number'){
            if (input > 79){
                const grade = console.log ('A');
            } else if (input >60 && value <=79){
                const grade = console.log ('B');
            } else if (input > 59 && value <= 49){
                const grade = console.log ('C');
            } else if (input > 40 && value <= 49){
                const grade = console.log ('D');
            } else if (input > 40){
                const grade = console.log ('E');
            }
        }
    }
    

studentMarks();