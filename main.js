
//TASK 1: 
// // completed
// //TASK 2:
var Name = "Haider";
console.log("hello      ", Name + ",", "\"would you like to learn some python today? \"");
//task 3:
var personName = " muneeb";
console.log("uppercase:", personName.toUpperCase());
console.log("lowercase:", personName.toLowerCase());
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//TASK 4:
var famous_person = "QUAID-E-AZAM";
var Quote = "there is no power on earth that can undo pakistan";
console.log("".concat(famous_person, " once said,\" ").concat(Quote, "\""));
//task 5:
var Author = "Henry Ford";
var Quote = "WHETHER YOU THINK YOU CAN OR THINK YOU CAN'T YOU'RE RIGHT";
console.log("".concat(Author, " once said,\" ").concat(Quote, "\""));
//task 6:
var personName = "\t\n Muneeb Ahmed \n\t";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());
//task 7:
console.log(5 + 3);
console.log(5 + 3);
console.log(16 - 8);
console.log(2 * 4);
console.log(32 / 4);
//task 8 AND 10:
// AUTHOR {MUNEEB AHMED}
//DATE{MONDAY, 19, 2024}
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//task 9 AND 10:
//AUTHOR{MUNEEB AHMED}
//DATE{MONDAY, 19, 2024}
var favoriteName = 4;
console.log("\"my favorite number is ".concat(favoriteName, "\""));
//TASK 11:
var names = ["muneeb", "haider", "muheeb", "ubaid"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//task 12:
var names = ["muheeb", "ubaid", "haider", "saifullah"];
var message = "Do you like to play with me?";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
//task 13:
var transportation = ["Honda City", "Honda motorcycle", "Bmw", "Audi"];
var message = "I would like to own a";
console.log(message + " " + transportation[0]);
console.log(message + " " + transportation[1]);
console.log(message + " " + transportation[2]);
console.log(message + " " + transportation[3]);
//task 13 second method:
var transportation = ["Honda City", "Honda motorcycle", "Bmw", "Audi"];
transportation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
//task 14:
var guestArr = ["muheeb", "ubaid", "haider"];
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , you are invited to the dinner in our restaurent."))); });
//TASK 14 COMPLETED:
//task 15:
var Guest = ["muheeb", "ubaid", "haider", "saifullah"];
var absent = "saifullah";
var newGuest = "jamal";
console.log(absent + " ", "you can not attend the dinner ");
Guest[Guest.indexOf(absent)] = newGuest;
console.log(Guest);
//task 15 COMPLETED:-
//task 16:
var Guest = ["Muheeb", "Ubaid", "Haider", "Saifullah"];
var absent = "Saifullah";
var newGuest = "Jamal";
Guest[Guest.indexOf(absent)] = newGuest;
console.log(Guest);
Guest.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dinning table so I am inviting more people "));
});
task;
16;
part;
2;
beginning: var Guestbeg = "Mubeen";
Guest.unshift(Guestbeg);
console.log(Guest);
//  task 16 part 3 Middile :
var middleGuest = " Hamza";
var middleIndex = Guest.length / 3;
Guest.splice(middleIndex, 0, middleGuest);
console.log(Guest);
//  task 16 part 4  append :

