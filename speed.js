function car(speed){
    let point;

    if (speed < 70){
        console.log('Ok');
    } else if (speed > 70){
        point = (speed - 70)/5
        console.log(`Points: ${point}`);
        if(point > 12){
            console.log("License suspended");
        }
    }
}
car(80);

