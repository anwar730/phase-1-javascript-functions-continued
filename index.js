function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog")



const mondayWork=function(activity="go to the office"){
   return `This Monday, I will ${activity}.`
}


function wrapAdjective(me='*'){
    return function lab(giveBack="special"){
        return `You are ${me}${giveBack}${me}!`
    }
}



