// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    //console.log(distanceFromHqInBlocks(blocks) * 264);
    return (distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet(blocks1, blocks2) {
    return Math.abs((blocks1 - blocks2) * 264);
}

function calculatesFarePrice(blocks1, blocks2) {
    if ((distanceTravelledInFeet(blocks1, blocks2) < 400) || (distanceTravelledInFeet(blocks1, blocks2) === 400)) {
        return 0;
    }

    else if (distanceTravelledInFeet(blocks1, blocks2) > 400 && distanceTravelledInFeet(blocks1, blocks2) < 2000) {
        return ((distanceTravelledInFeet(blocks1, blocks2) - 400) * 2)/100;
    }
    
    else if (distanceTravelledInFeet(blocks1, blocks2) > 2000 && distanceTravelledInFeet(blocks1, blocks2) < 2500) {
        return 25;
    }

    else if (distanceTravelledInFeet(blocks1, blocks2) > 2500 || distanceTravelledInFeet(blocks1, blocks2) === 2500){
        return ("cannot travel that far");
    }
}