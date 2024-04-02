// 1
const numArray: Array<number> = [1, 2, 3, 4, 5];

// 2
const stringNumArray: Array<string | number> = ["One", 2, "Three", 4, "Five"];
stringNumArray.forEach((element) => console.log(element));

// 3
let numOrBool: number | boolean = true;
numOrBool = 1;

// 4
const fn = (paraOne, paraTwo): void => {
	if (paraOne === undefined || paraTwo === undefined) {
		console.log("Parameters are missing.");
		return;
	}

	console.log(paraOne, paraTwo);
};

// 5
interface IEmployee {
	employeeId: number;
	employeeName: string;
	employeeEmail: string;
	employeeAddress: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
}

class Employee implements IEmployee {
	constructor(
		public employeeId,
		public employeeName,
		public employeeEmail,
		private _employeeUsername,
		public employeeAddress
	) {}
}

// 6
class Manager extends Employee {
	constructor(
		public managerId,
		public managerName,
		public managerEmail,
		private _managerUsername,
		public managerAddress
	) {
		super(
			managerId,
			managerName,
			managerEmail,
			_managerUsername,
			managerAddress
		);
	}

	viewEmployeeAddress = (): Pick<IEmployee, "employeeAddress"> => {
		return this.employeeAddress;
	};
}

// 7
interface IAccount {
	dateOfOpening: Date;
	addCustomer: () => boolean;
	removeCustomer: () => boolean;
}

class Account {
	constructor(public accNo, public balance) {}

	debitAmount = () => 5000;
	creditAmount = () => 5000;
	getBalance = () => this.balance;
}

class SavingAccount extends Account implements IAccount {
	constructor(
		public accNo,
		public balance,
		public dateOfOpening,
		public minBalance
	) {
		super(accNo, balance);
	}

	addCustomer = () => true;
	removeCustomer = () => true;
}

class CurrentAccount extends Account implements IAccount {
	constructor(
		public accNo,
		public balance,
		public dateOfOpening,
		public interestRate
	) {
		super(accNo, balance);
	}

	addCustomer = () => true;
	removeCustomer = () => true;
}
