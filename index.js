var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1
var numArray = [1, 2, 3, 4, 5];
// 2
var stringNumArray = ["One", 2, "Three", 4, "Five"];
stringNumArray.forEach(function (element) { return console.log(element); });
// 3
var numOrBool = true;
numOrBool = 1;
// 4
var fn = function (paraOne, paraTwo) {
    if (paraOne === undefined || paraTwo === undefined) {
        console.log("Parameters are missing.");
        return;
    }
    console.log(paraOne, paraTwo);
};
var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, employeeEmail, _employeeUsername, employeeAddress) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this._employeeUsername = _employeeUsername;
        this.employeeAddress = employeeAddress;
    }
    return Employee;
}());
// 6
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerId, managerName, managerEmail, _managerUsername, managerAddress) {
        var _this = _super.call(this, managerId, managerName, managerEmail, _managerUsername, managerAddress) || this;
        _this.managerId = managerId;
        _this.managerName = managerName;
        _this.managerEmail = managerEmail;
        _this._managerUsername = _managerUsername;
        _this.managerAddress = managerAddress;
        _this.viewEmployeeAddress = function () {
            return _this.employeeAddress;
        };
        return _this;
    }
    return Manager;
}(Employee));
var Account = /** @class */ (function () {
    function Account(accNo, balance) {
        var _this = this;
        this.accNo = accNo;
        this.balance = balance;
        this.debitAmount = function () { return 5000; };
        this.creditAmount = function () { return 5000; };
        this.getBalance = function () { return _this.balance; };
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accNo, balance, dateOfOpening, minBalance) {
        var _this = _super.call(this, accNo, balance) || this;
        _this.accNo = accNo;
        _this.balance = balance;
        _this.dateOfOpening = dateOfOpening;
        _this.minBalance = minBalance;
        _this.addCustomer = function () { return true; };
        _this.removeCustomer = function () { return true; };
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accNo, balance, dateOfOpening, interestRate) {
        var _this = _super.call(this, accNo, balance) || this;
        _this.accNo = accNo;
        _this.balance = balance;
        _this.dateOfOpening = dateOfOpening;
        _this.interestRate = interestRate;
        _this.addCustomer = function () { return true; };
        _this.removeCustomer = function () { return true; };
        return _this;
    }
    return CurrentAccount;
}(Account));
