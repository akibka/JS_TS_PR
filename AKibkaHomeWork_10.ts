//--------------------------Task 1-------------------------------

function display(param: string): void;
function display(param1: string, param2: string): void;
function display(paramArray: string[]): void;
function display(param: any, param2?: any): void {
    if (typeof param === 'string' && typeof param2 === 'undefined') {
        console.log(param);
    } else if (typeof param === 'string' && typeof param2 === 'string') {
        console.log(param); console.log(param2);
    } else if (Array.isArray(param) && param.every(item => typeof item === 'string')) {
        param.forEach(item => console.log(item));
    } else {
        throw new Error('Invalid parameter types. Expected a string, two strings, or an array of strings.');
    }
}

try {
    display("Hello, World!");
    display("Hello", "World!");
    display(["Hello", "World", "!"]);
} catch (error) {
    console.error (error.message);
}

//---------------------------Task 2---------------------------------------

function identify<T extends { rating: number }>(items: T[]): number {
    if (items.length === 0) return 0;
    const averageRating = items.reduce((sum, item) => sum + item.rating, 0);
    return averageRating / items.length;
}
console.log(identify([{ name: "Anna", rating: 3 }]));
console.log(identify([{ title: "Encounter", rating: 3 }, { title: "Dead to me", rating: 4 }, { title: "Riverdale", rating: 5 }]));

//----------------------------Task 3-------------------------------------

function withEmploymentDate<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        employmentDate = new Date('2024-04-12');  // Or employmentDate = new Date(); which will always use current date and time
    }
}

@withEmploymentDate
class Manager {
    task: string = 'Simple task';
    project: string = 'Simple project';
    constructor() {
        console.log('Initializing the Manager class');
    }
}

const manager = new Manager();
console.log(manager);




