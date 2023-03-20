// Code your solution in this file!
function distanceFromHqInBlocks(number){
    return Math.abs(42 - number)
    
}
function distanceFromHqInFeet(number){
   let a=distanceFromHqInBlocks(number);
   return(a*264)
     
}
function distanceTravelledInFeet(start, destination){
    let block = Math.abs(destination-start)
    let feetdistance = block*264;
    return feetdistance;


}
function calculatesFarePrice(start, destination){
    let distans=distanceTravelledInFeet(start, destination);
    if (distans<=400){
       var price =0;
    }
    else if(distans>400 && distans<=2000){
        var overload = distans-400;
        var price =overload*0.02;
    }
    else if (distans>2000 && distans<=2500){
        var price =25;
    }
    else if(distans>2500){
        var price ='cannot travel that far';
    }
    return price;


}