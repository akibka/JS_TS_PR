//----------------------------Task 1--------------------------------------

function gettUserInfo(obj) { 
    const { 
        firstName, 
        lastName, 
        contact: { email, phone }, 
        address: { city } 
    } = obj; 
    return { 
       firstName, 
       lastName, 
       email, 
       phone, 
       city}; 
} 
const user = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 30, 
    contact: { 
       email: "john.doe@example.com", 
       phone: "123-456-7890" },
    address: {
       city: "New York", 
       country: "USA"}
};
console.log(gettUserInfo(user));

//--------------------------------------Task 2--------------------------

function countCars(cars) { 
    const carCountMap = new Map(); 
    cars.forEach(car => {
        if (carCountMap.has(car)) { 
        carCountMap.set(car, carCountMap.get(car) + 1);
        } 
        else {
        carCountMap.set(car, 1);
        } 
    });
return carCountMap; 
} 
const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"]; 
console.log(countCars(cars));


//--------------------------------Task 3--------------------------

function checkLogin(username, password) { 
    return new Promise((resolve) => { setTimeout(() => { 
    if (username === 'admin' && password === 'qwerty123456') { 
    resolve(`Welcome, ${username}!`); 
    } else { 
    resolve('Invalid username or password!'); } }, 2000); 
    }); 
}
checkLogin("admin1", "qwerty123456")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));


//-----------------------------Task 4--------------------------


async function loadUserProfile(userId) {
    try {
        const [profile, posts] = await Promise.all([ fetchUserProfile(userId), fetchUserPosts(userId) ]); 
    return { profile, posts }; 
    } 
    catch (error) { 
    return "Error loading user data"; 
    } 
} 
async function fetchUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId, name: "John Doe", age: 30 });
        }, 1000);
    }); 
} 
async function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve([
            { postId: 1, content: "Hello, world!" },
            { postId: 2, content: "Loving this app!" } ]);
        }, 2000);
    }); 
} 

loadUserProfile(1) 
.then((data) => console.log(data))
.catch((error) => console.log(error));

//-----------------------Task 5-------------------------------
// In progress....