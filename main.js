    "use strict";
    //TASK 1: 
    // completed
    //TASK 2:
    let Name = "Haider";
    console.log("hello", Name + ",", `"would you like to learn some python today? "`);
    //task 3:
    let personName = " muneeb";
    console.log("uppercase:", personName.toUpperCase());
    console.log("lowercase:", personName.toLowerCase());
    console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
    //TASK 4:
    let famous_person = "QUAID-E-AZAM";
    let Quote = "there is no power on earth that can undo pakistan";
    console.log(`${famous_person} once said," ${Quote}"`);
    //task 5:
    let Author = "Henry Ford";
    let Quote = "WHETHER YOU THINK YOU CAN OR THINK YOU CAN'T YOU'RE RIGHT";
    console.log(`${Author} once said," ${Quote}"`);
    //task 6:
    let personName = "\t\n Muneeb Ahmed \n\t";
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
    let favoriteName = 4;
    console.log(`"my favorite number is ${favoriteName}"`);
    //TASK 11:
    let names = ["muneeb", "haider", "muheeb", "ubaid"];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    //task 12:
    let names = [] = ["muheeb", "ubaid", "haider", "saifullah"];
    let message = "Do you like to play with me?";
    console.log(names[0] + " " + message);
    console.log(names[1] + " " + message);
    console.log(names[2] + " " + message);
    console.log(names[3] + " " + message);
    //task 13:
    let transportation = ["Honda City", "Honda motorcycle", "Bmw", "Audi"];
    let message = "I would like to own a";
    console.log(message + " " + transportation[0]);
    console.log(message + " " + transportation[1]);
    console.log(message + " " + transportation[2]);
    console.log(message + " " + transportation[3]);
    //task 13 second method:
    let transportation = ["Honda City", "Honda motorcycle", "Bmw", "Audi"];
    transportation.map((items) => console.log(`I would like to own a ${items}`));
    //task 14:
    let Guest = ["muheeb", "ubaid", "haider"];
    Guest.map((items) => (console.log(`Dear ${items} , you are invited to the dinner in our restaurent.`)));
    //TASK 14 COMPLETED:
    //task 15:
    let Guest = ["muheeb", "ubaid", "haider", "saifullah"];
    let absent = "saifullah";
    let newGuest = "jamal";
    console.log(absent + " ", "you can not attend the dinner ");
    Guest[Guest.indexOf(absent)] = newGuest;
    console.log(Guest);
    //task 15 COMPLETED:-
    //task 16:
    let Guest = ["Muheeb", "Ubaid", "Haider", "Saifullah"];
    let absent = "Saifullah";
    let newGuest = "Jamal";
    Guest[Guest.indexOf(absent)] = newGuest;
    console.log(Guest);
    Guest.map((items) => );
    console.log(`Dear ${items}, I found a bigger dinning table so I am inviting more people `);
    // task 16 part 2 beginning : 
    let Guestbeg = "Mubeen";
    Guest.unshift(Guestbeg);
    console.log(Guest);
    //  task 16 part 3 Middile :
    let middleGuest = " Hamza";
    let middleIndex = Guest.length / 3;
    Guest.splice(middleIndex, 0, middleGuest);
    console.log(Guest);
    //  task 16 part 4  append :
    Guest.push("zeeshan");
    console.log(guestArr);
    //task 16 part 5 :
    Guest.map((items) => console.log(`Dear ${items} ,you are invited on my birthday party along with your family`));
    //task 17:
    let Guest = ["Muheeb", "Ubaid", "Haider", "Saifullah"];
    while (Guest.length > 2) {
        const removedGuest = Guest.pop();
        console.log(`Sorry , ${removedGuest} you are no longer invited to the dinner`);
    }
    //messaging the existing persons:
    Guest.pop();
    Guest.pop();
    console.log("final guest list:", Guest);
    //task 18:
    let placesToVisit = ["SAUDIA ARABIA", "KAZAKISTAN", "SOUTH KOREA", "CANADA", "UNITED STATES OF AMERICA ", "UNITED ARAB EMIRATES"];
    console.log("Original Order:", placesToVisit);
    // In alphabetical order:
    console.log("Alphabetical Order:", [...placesToVisit].sort());
    // in Original Order: 
    console.log("Original Order:", placesToVisit);
    //In Reversed Alphabetcal Order:
    console.log("Reversed Alphabetical Order:", [...placesToVisit].sort().reverse());
    // in Original Order:
    console.log("Original Order:", placesToVisit);
    //reverse order of the list:
    placesToVisit.reverse();
    console.log("Reversed Order:", placesToVisit);
    //Reverse the order again to get back to the original order:
    placesToVisit.reverse();
    console.log("Back to Original Order:", placesToVisit);
    //sort in alphabetical order:
    console.log("Sorted in Alphabetical Order:", placesToVisit);
    //sort in reverse alphabetical order:
    placesToVisit.sort((a, b) => b.localeCompare(a));
    console.log("sorted in reverse alphabetical order:", placesToVisit);
    //Task 19 
    let guestlists = ["Muheeb", "Ubaid"];
    let guest_invitation = guestlists.length;
    console.log(`${guest_invitation} people are invited to the dinner.`);
    //task 20:
    let Country = ["Bolivia", "Russia", "China", "Mexico", "Canada", "venezuela", "South Korea"];
    console.log("list of Country:");
    console.log(Country);
    //task 21:
    let Person = { name: "Muneeb", Fathername: "M.Arif", Age: 16 };
    console.log(Person);
    //task 22:
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(days, { 9:  }); //ERROR
    console.log(days[6]);
    // Task 23:
    let Superbike = "kawasaki Ninja H2R";
    console.log("is Superbike==' Kawasaki Ninja H2R?' predict true");
    console.log(Superbike == 'kawasaki Ninja H2R');
    console.log("is Superbike != 'Hayabusa'? predict true");
    console.log(Superbike != 'Hayabusa');
    console.log("is Superbike =='Kawasaki Ninja H2R' && Superbikebike.length==16 ?predict false");
    console.log(Superbike == 'Kawasaki Ninja H2R' && Superbike.length == 16);
    console.log("is Superbike.length == 16 ? predict true");
    console.log(Superbike.length === 16);
    console.log("is Superbike.length !=18? predict true");
    console.log(Superbike.length != 18);
    console.log("is 5>11? predict false");
    console.log(5 > 11);
    console.log("is 45<110? predict true");
    console.log(45 > 10);
    console.log("is 2<=2? predict true");
    console.log(2 <= 2);
    console.log("is 4<=1? predict false");
    console.log(4 <= 1);
    console.log("is 92!=91? predict true");
    console.log(92 != 91);
    //task 24:
    let name_1 = "Muneeb";
    let name_2 = "MUhammad Muneeb";
    let name_3 = "Muhammad Muneeb Ahmed";
    if (name_1 == name_3) {
    console.log("names are Equal");
    }
    else {
    console.log("names are not Equal");
    }
    if (name_1 != name_2) {
    console.log("names are equal");
    }
    else {
    console.log("namea are not equal");
    }
    let Age_1 = 18;
    let Age_2 = 26; 
    if (Age_1 == 18) {
    console.log("Eligible for driving.");
    }
    if (Age_2 == 26) {
    console.log("Eligible for job.");
    }
    if (Age_1 <= Age_2) {
    console.log("younger");
    }
    if (Age_2 >= Age_1) {
    console.log("Older");
    }
    if (Age_1 == 18 && Age_2 == 26) {
    console.log("person is eligible for vote");
    if (Age_1 == 18 || Age_2 != 26) {
        console.log("person is not eligible for vote");
    }
    let country = ["PAKISTAN", "BANGLADESH", "MEXICO", "RUSSIA"];
    if (country.includes("PAKISTAN")) {
        console.log("PAKISTAN is the best country");
    }
    if (!country.includes("china")) {
        console.log("china is not in the array");
    }
    //task 25:
    let alien_color = "Red";
    if (alien_color == "Red")
        ;
    //  console.log("you earned 5 points");
    let alien_color = "Green";
    if (alien_color == "Green")
        ;
    console.log("no output");
    //task 26:
    let alien_color = "Red";
    if (alien_color == "Red") {
        console.log("player just earned 5 points for shooting the alien.");
    }
    let alien_color = "Red";
    if (alien_color == "Red") {
        console.log("player just earned 5 points for shooting the alien.");
    }
    else {
        console.log("player just earned 10 points");
    }
    //task 27 method no 1:
    let alien_color = "green";
    if (alien_color = "green") {
        console.log("player earned 5 points");
    }
    let alien_color = "yellow";
    if (alien_color = "yelow") {
        console.log("player earned 10 points");
    }
    let alien_color = "red";
    if (alien_color = "red") {
        console.log("player earned 15 points");
    }
    task;
    27;
    method;
    no;
    2;
    let alien_color = "red";
    if (alien_color == "red") {
        console.log("player just earned 15 points.");
    }
    else if (alien_color == "yellow") {
        console.log("player just earned 10 points.");
    }
    else {
        console.log("player just earned 5 points.");
    }
    //task 28:
    let age = 46;
    if (age < 2) {
        console.log("you are a baby");
    }
    else if (age < 4) {
        console.log("you are a toddler");
    }
    else if (age < 13) {
        console.log("you are a kid");
    }
    else if (age < 20) {
        console.log("you are a teenager");
    }
    else if (age < 65) {
        console.log("you are adult");
    }
    else {
        console.log("you are older");
    }
    task;
    29;
    let favourite_fruit = ["apple", "banana", "mango", "orange"];
    if (favourite_fruit.includes("apple")) {
        console.log("you like apple");
    }
    if (favourite_fruit.includes("orange")) {
        console.log("you like orange");
    }
    if (favourite_fruit.includes("banana")) {
        console.log("you like banana");
    }
    if (favourite_fruit.includes("Peach")) {
        console.log("you like peach");
    }
    //task 30:
    let users = ["Moiz", "Mubeen", "Hamza", "Haider"];
    for (let user of users) {
        if (user === "Moiz") {
            console.log("hello moiz, thanks to visit our website");
        }
        else {
            console.log(`hello ${user}, will you complete your assignments`);
        }
    }
    task;
    31;
    let users = ["Moiz", "Mubeen", "Hamza", "Haider"];
    if (users.length === 0) {
        console.log("we need some users in our website");
    }
    else {
        for (let user of users) {
            if (user === "Moiz") {
                console.log("hello Moiz , thank you to visit our website.");
            }
            else {
                console.log(`hello ${user}, will you complete your assignment.`);
            }
        }
    }
    For;
    no;
    user;
    command: let users = ["Moiz", "Mubeen", "Hamza", "Haider"];
    users = [];
    if (users.length === 0) {
        console.log("we need some users in our website");
    }
    task;
    32;
    let current_users = ["Moiz", "Mubeen", "Hamza", "Haider"];
    let new_users = ["Mheeb", "Ubaid", "Saifullah", "Mubeen", "Faizullah"];
    let current_users_lo = current_users.map(users => users.toLowerCase());
    for (let new_user of new_users) {
        if (current_users_lo.includes(new_user.toLocaleLowerCase())) {
            console.log(`sorry ${new_user}, you are already invited`);
        }
        else {
            console.log(`yes ${new_user}, you are in guest list`);
        }
    }
    //task 33:
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let number of numbers) {
        if (number === 1) {
            console.log(`${number}st`);
        }
        else if (number === 2) {
            console.log(`${number}nd`);
        }
        else if (number === 3) {
            console.log(`${number}rd`);
        }
        else {
            console.log(`${number}th`);
        }
        task;
        34;
        let favourite_pizza = ["chicken tikka", "fajita", "chicken afghani"];
        for (let pizza of favourite_pizza) {
            console.log(pizza);
        }
        console.log("\n");
        for (let pizza of favourite_pizza) {
            console.log(`i really like ${pizza} pizza!`);
        }
        console.log("I like pizza because it is grilled  with chicken, onions, bell peppers, and a blend of spices.");
        // task 35:
        let animals = ["Zebra", "Girrafe", "Elephant"];
        for (let animal of animals) {
            console.log(animal);
        }
        console.log("\n");
        for (let animal of animals) {
            console.log(`A ${animal} is a herbivores`);
        }
        console.log("\n All of these animals can only eat grass and they are huge in size.");
        task;
        36;
        function makeshirt(size, text) {
            console.log(`\n you order a ${size} shirt on which ${text} is print on it.`);
        }
        makeshirt('large', '"i love my mother"');
        makeshirt('medium', '"i love my father"');
        task;
        37;
        function makeshirt(size = 'large', text = "i love type script") {
            console.log(`\n you order a ${size} shirt on which ${text} is print on it.`);
        }
        makeshirt();
        makeshirt('medium');
        makeshirt('small', ' i need a bigger shirt to wear.');
        task;
        38;
        function describe_city(city, country = 'United states of America.') {
            console.log(`${city} is in ${country}`);
        }
        describe_city('New York City');
        describe_city('Paris', 'France');
        describe_city('Lahore', 'pakistan');
        task;
        39;
        function city_country(city, country) {
            return `${city},${country}`;
        }
        let c1 = city_country('beijing', 'china');
        let c2 = city_country('Moscow', 'Russia');
        let c3 = city_country('Tehran', 'Iran');
        console.log(c1);
        console.log(c2);
        console.log(c3);
        task;
        40;
        function makeAlbum(artist, title) {
            const dictionaries = {
                artist: artist.charAt(0).toUpperCase() + artist.slice(1),
                title: title.charAt(0).toUpperCase() + title.slice(1)
            };
            return dictionaries;
        }
        let album = makeAlbum("hassan", "Ceramic Artist.");
        console.log(album);
        album = makeAlbum(" Aryan", "Glass Artist.");
        console.log(album);
        album = makeAlbum("hunain", "Painter.");
        console.log(album);
        task;
        41;
        function show_magicians(magicians) {
            for (const magician of magicians) {
                console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
            }
        }
        const magician = ["Dynamo", "Munawar Khan", "Shahrukh Zahoor"];
        show_magicians(magician);
        task;
        42;
        function making_great(magicians) {
            for (let i = 0; i < magicians.length; i++) {
                magicians[i] = magicians[i] + ` the Great`;
            }
        }
        const magicians2 = ["Dynamo", "Munawar Khan", "Shahrukh Zahoor"];
        making_great(magicians2);
        console.log(magicians2);
        //task 43:
        function making_great2(magicians) {
            const greatMagicians = [];
            for (let i = 0; i < magicians.length; i++) {
                greatMagicians.push(magicians[i] + ` the Great`);
            }
            return greatMagicians;
        }
        const magician3 = ["Dynamo", "Munawar Khan", "Shahrukh Zahoor"];
        const greatMagicians2 = making_great2(magician3);
        console.log(magician3);
        console.log(greatMagicians2);
        task;
        44;
        -function sandwich(...items) {
            console.log("sandwich order:");
            for (let i = 0; i < items.length; i++) {
                console.log(`-${items[i]}`);
            }
        };
        console.log("Enjoy your sandwich Muneeb Ahmed");
        sandwich('mayo sauce', 'tomato', ' chicken');
        sandwich('beef', 'cucumber', 'pickles', 'cheese');
        sandwich('lettuce', 'griled chicken', 'onion', 'olives');
        function createCar(manufacture, model, optional) {
            return {
                manufacture,
                model,
                ...optional
            };
        }
        const favorite_car = createCar("Volkswagen", "Buggati", { color: 'blue and black', year: '2024' });
        console.log(favorite_car);
        // all tasks are completed:
        ///////////////////////////alhumduliallh !}
    // all tasks are completed:
    ///////////////////////////alhumduliallh !}
// all tasks are completed:
///////////////////////////alhumduliallh !
