function lifeInWeek(age) {

    let yearsRemaning = 90 - age;
    let Day = yearsRemaning * 365;
    let Weeks = yearsRemaning * 52;
    let month = yearsRemaning *12;
     console.log("You have " + Day + " Days," + Weeks+ " Weeks, And " + month + " Months left" )
    
}

lifeInWeek(20);

