//--------------------------------Task 1-----------------------------------

interface Employee {
    name: string;
    profession: string;
    workingHoursPerDay: number;
}
interface PremiumData {
    isPremium: boolean;
    premium: number;
}
const employee: Employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};
const premiumData: PremiumData = {
    isPremium: true,
    premium: 1000
};
const payPerHour: number = 32;
const workingDays: number = 14;
const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];
const getSalaryInfo = (
    employeeData: Employee,
    premiumData: PremiumData,
    payPerHour: number,
    workingDays: number,
    experienceCoefficient: number
): string => {
    let salary: number;
    if (premiumData.isPremium) {
        salary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient + premiumData.premium;
    } else {
        salary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
    }
    return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
};
const salaryInfo: string = getSalaryInfo(employee, premiumData, payPerHour, workingDays, experienceCoefficients[2]);

//------------------------------------Task 2---------------------------------------------------

function processData(input: any): any {
    if (typeof input === 'string') {
        return input.toUpperCase();
    } else if (typeof input === 'number') {
        return input * input;
    } else if (typeof input === 'boolean') {
        return !input;
    } else if (Array.isArray(input)) {
        if (input.length === 0) {
            return "Empty array: []";
        } else if (input.every(item => typeof item === 'number')) {
            return input.map((num: number) => num * num);
        }
    }
    return undefined; // Or we can log any message, or even try to addy error handling
}

console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // Empty array: []

//-------------------------------------Task 3-------------------------------------------------------

type Triangle = {
    type: 'triangle';
    base: number;
    height: number;
};
type Rectangle = {
    type: 'rectangle';
    width: number;
    height: number;
}; type Circle = {
    type: 'circle';
    radius: number;
};

type Figure = Triangle | Rectangle | Circle;
function getFigureInfo(figure: Figure): string {
    switch (figure.type) {
        case 'triangle': {
            const triangleArea = (figure.base * figure.height) / 2;
            return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${triangleArea}`;
        }
        case 'rectangle': {
            const rectangleArea = figure.width * figure.height;
            return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${rectangleArea}`;
        }
        case 'circle': {
            const circleArea = Math.PI * Math.pow(figure.radius, 2);
            return `Circle with radius ${figure.radius} has an area of ${circleArea.toFixed(2)}`;
        }
        default: {
            return 'Unknown figure';
        }
    }
}

const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
const circle: Circle = { type: "circle", radius: 8 };

console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));


