// Code your solution in this file!
function distanceFromHqInBlocks(streetNum){
   
   return Math.abs(streetNum - 42);
} //returns blocks as positive

function distanceFromHqInFeet(streetNum){
    let streetBlocksInFeet = (distanceFromHqInBlocks(streetNum))*264;

    return streetBlocksInFeet;
} //calls distanceFromHqInBlocks and changes to feet

function distanceTravelledInFeet(start, destination){
    let travelledFeet = (Math.abs(start - destination)*264);

    return travelledFeet;
} // distance in feet between start and destination

function calculatesFarePrice(start, destination){
    let feetTravelled = (distanceTravelledInFeet(start, destination));
    if(feetTravelled <= 400){
        return 0;
    } else if(feetTravelled <= 2000){
        return (feetTravelled-400) * 0.02;
    } else if(feetTravelled <= 2500){
        return 25;
    } else if(feetTravelled >= 2501){
        return "cannot travel that far";
    }

}//returns the fare for the customer