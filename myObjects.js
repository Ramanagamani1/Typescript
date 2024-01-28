"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "mani",
    email: "mani@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "vaishu", isPaid: false, email: "mani@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "mani" };
}
createCourse();
function createUser1(user) {
    return user;
}
createUser1({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "Mani",
    email: "mani@gmail.com",
    isActive: false
};
var myCardDetails = {
    cardnumber: "12345",
    cardDate: "Jan 27",
    cvv: 123
};
