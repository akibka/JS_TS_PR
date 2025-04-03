//----------------------Task 1-------------------------

type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];
const superSort: SortFunction = (arr, direction) => {
    const sortedArray = [...arr].sort((a, b) => {
        if (direction === "asc") {
            return a.localeCompare(b);
        } else {
            return b.localeCompare(a);
        }
    });
    return sortedArray;
};

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);

//---------------------------Task 2------------------------

interface Dimensions {
    length: number;
    width: number;
    height: number;
} 
enum PackageStatus {
    Pending,
    InTransit,
    Delivered,
    Lost
} 
interface Parcel {
    readonly id: number;
    weight: number;
    dimensions: Dimensions;
    description?: string;
    sender: number | string;
    status: PackageStatus;
    deliver(isSuccess: boolean): void; 
    get statusName(): string;
}

const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess) { 
        this.status = isSuccess 
            ? PackageStatus.Delivered 
            : PackageStatus.Lost; 
    }, 
    get statusName() { 
        return PackageStatus[this.status]; 
    }
}

item.deliver(true);
console.log(item.statusName);

//----------------------------------Task 3-----------------------------

interface Printable {
    print(): void;
}
abstract class User {
    private static idCounter = 1000;
    public readonly id: number;
    public email: string;
    private password: string;
    constructor(email: string, password: string) {
        this.id = User.idCounter++;
        this.email = email;
        this.setPassword(password);
    }
    private setPassword(password: string): void {
        if (password.length < 6) {
            console.log("Password too short!");
        } else {
            this.password = password;
        }
    }
    get passwordPreview(): string {
        return this.password[0] + '*'.repeat(this.password.length - 2) + this.password[this.password.length - 1];
    }
    changePassword(newPassword: string): void {
        this.setPassword(newPassword);
    }
    abstract showProfile(): void;
}
class Admin extends User implements Printable {
    public isActive: boolean;
    constructor(email: string, password: string, isActive: boolean) {
        super(email, password);
        this.isActive = isActive;
    } showProfile(): void {
        const url = this.isActive
        ? `https://softserve/profile/${this.id}`
        : "https://softserve/login";
        console.log(url);
    }
    print(): void {
        console.log("Admin");
    }
}

const admin = new Admin('admin@gmail.com', 'Qwerty', true); // I added 'true' here as constructor expects it.

admin.changePassword('Weak');
console.log(admin.passwordPreview);

admin.changePassword('Super-Pass');
console.log(admin.passwordPreview);
