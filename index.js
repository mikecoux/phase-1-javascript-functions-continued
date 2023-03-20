// code your solution here
function saturdayFun (activity){
    activity = activity || "roller-skate";
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (work){
    work = work || "go to the office"
    return `This Monday, I will ${work}.`
}

function wrapAdjective (flair = "*") {
    return function (adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}