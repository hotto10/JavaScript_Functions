//Exercise 1
function printOdds(count){
    if (count < 0){
        for (let i = 1; i >=count; i--) {
            if(i % 2 != 0){
                console.log(i);
            }
        }
    }else {
        for (let i = 1; i <= count; i++){
            if(i % 2 != 0){
                console.log(i)
            }
        }    
    }    

}

printOdds(10);
printOdds(-10);

//Exercise 2
function checkAge(name, age) {
    let oldEnough = `Yay ${name}! You are old enough to drive!!`;
    let tooYoung = `Thats too bad ${name}, you need to wait ${} year(s) until you can drive.`;

    if (age < 16) {
        console.log(tooYoung);
    } else {
        console.log(oldEnough);
    }
}

checkAge("Michelle", 15);
checkAge("Heather", 21);

//Exercise 3

function checkQuadrant(x,y){
    if (x > 0 && y > 0) {
        return 1;
    }else if (x < 0 && y > 0){
        return 2;
    }else if (x < 0 && y < 0){
        return 3;
    }else if (x > 0 && y < 0){
        return 4;
    }else if (x == 0 && y != 0){
        return "X Axis";
    }else if (x != 0 && y == 0){
        return "Y Axis"
    }else{
        return "origin";
    }

}
console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
//Exercise 4
function isValidTriangle(a, b, c){
    return a + b >= c && a + c >= b && b + c >= a
}

function checkTriangle(a, b, c){
    let isValid = isValidTriangle(a, b, c);
    if (isValid){

        if( a == b && b == c) {
            return 'Equilateral';
        }else if (a ==b || b == c || a == c){
            return 'Isoseles';
        }else
            return 'Scalene';
    } else {
        return 'Not a valid triangle';
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

//Exercise 5
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`{day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected used, ${projectedAvg} GB/day`);

    if(currentAvg > projectedAvg){
        statusMsg = "Exceeding";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "Under";
    }else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day), continuing this usage will end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.`);


}
dataUsageFeedback(50, 12, 25);