const prompt=require("prompt-sync")();

function studentMarks(){
    const input = prompt('Please enter student marks');
    let grade;

        if (typeof(value) === 'number'){
            if (value > 79){
                const grade = console.log ('A');
            } else if (value >60 && value <=79){
                const grade = console.log ('B');
            } else if (value > 59 && value <= 49){
                const grade = console.log ('C');
            } else if (value > 40 && value <= 49){
                const grade = console.log ('D');
            } else if (value > 40){
                const grade = console.log ('E');
            }
        }
    }
    

studentMarks();