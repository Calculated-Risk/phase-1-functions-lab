// Code your solution in this file!
function distanceFromHqInBlocks(num){
    if(num > 42){
        return num - 42;
        distanceFromHqInBlocks(43) 
    }else{
        return 42 - num;
    }
}


function distanceFromHqInFeet (num1){
    if (num1 > 42){
        return (num1 - 42) * 264;
    }else {
        return (42 - num1) * 264;
    }
}

function distanceTravelledInFeet(num3, num4){
    if (num3 > 42){
        return (num4-num3) * 264;
    } else if (num3 < 42) {
        return (num3 - num4) * 264;   
    }
}



function calculatesFarePrice(start, dest){
    let distance = distanceTravelledInFeet(start,dest)
    if (distance < 400){
        return 0;
    }else if (distance > 400 && distance < 2000){
        return ((distance) - 400) * 0.02;
    }else if (distance > 2000 && distance < 2500){
        return 25;
    }
    else if (distance >= 2500){
      return 'cannot travel that far'
    }
}