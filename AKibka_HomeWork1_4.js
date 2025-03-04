//Option 1

const a = 68;
if (a >=0 && a <= 49){
    console.log("Unsatisfied");
}
else if (a >=50 && a <= 70){
    console.log("Satisfied");
}
else if (a >=71 && a <= 80){
    console.log("Good");
}
else if (a >=81 && a <= 100){
    console.log("Excellent");
}
else {
    console.log("Incorrect Assessment");
}

// Option 2

const a = 88;
switch (true) {
    case (a >= 0 && a <= 49):
        console.log("Unsatisfied");
        break;
    case (a >= 50 && a <= 70):
        console.log("Satisfied");
        break;
    case (a >= 71 && a <= 80):
        console.log("Good");
        break;
    case (a >= 81 && a <= 100):
        console.log("Excellent");
        break;
    default:
        console.log("Incorrect Assessment");
    }