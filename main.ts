
 
//TASK 1: 
// // completed
// //TASK 2:
 let Name="Haider"
 console.log( "hello      " , Name +",",`"would you like to learn some python today? "`);
 //task 3:
 let personName:string=" muneeb";
 console.log("uppercase:", personName.toUpperCase() );
 console.log("lowercase:",personName.toLowerCase());
 console.log("titlecase:",personName.replace (/\b\w/g, c=> c.toUpperCase()));
  //TASK 4:
  let famous_person:string="QUAID-E-AZAM"
  let Quote:string="there is no power on earth that can undo pakistan"
  console.log(`${famous_person} once said," ${Quote}"`);
 //task 5:
 let Author ="Henry Ford";
 let Quote:string ="WHETHER YOU THINK YOU CAN OR THINK YOU CAN'T YOU'RE RIGHT"
 console.log(`${Author} once said," ${Quote}"`);

 //task 6:
  let personName: string="\t\n Muneeb Ahmed \n\t";
  console.log("Original:", personName);
  console.log("Stripped:", personName.trim());
   //task 7:
 console.log(5+3);
console.log(5+3);
console.log(16-8);
console.log(2*4);
 console.log(32/4);
 //task 8 AND 10:
// AUTHOR {MUNEEB AHMED}
 //DATE{MONDAY, 19, 2024}
 console.log( 5 + 3);
 console.log( 5 + 3);
console.log( 5 + 3);
console.log( 5 + 3);
//task 9 AND 10:
//AUTHOR{MUNEEB AHMED}
//DATE{MONDAY, 19, 2024}
let favoriteName: number=4;
console.log(`"my favorite number is ${favoriteName}"`); 
//TASK 11:
let names:string []=["muneeb","haider","muheeb","ubaid"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
 //task 12:

 let names :string=[]=["muheeb","ubaid","haider","saifullah"]

 let message :string ="Do you like to play with me?"

 console.log(names[0] +" "  + message);

 console.log(names[1] +" "  + message);

 console.log(names[2] +" "  + message);

 console.log(names[3] +" "  + message);

 //task 13:

 let transportation :string []=["Honda City","Honda motorcycle","Bmw","Audi"]

 let message:string ="I would like to own a"

 console.log( message + " " + transportation[0]);

 console.log( message + " " + transportation[1]);

 console.log( message + " " + transportation[2]);

 console.log( message + " " + transportation[3]);

 //task 13 second method:

 let transportation :string []=["Honda City","Honda motorcycle","Bmw","Audi"];

 transportation.map((items) =>console.log(`I would like to own a ${items}`));

 //task 14:

  let Guest:string []=["muheeb","ubaid","haider"];
  Guest.map((items) =>(console.log( `Dear ${items} , you are invited to the dinner in our restaurent.`))) 
 //TASK 14 COMPLETED:

 //task 15:

 let Guest=["muheeb","ubaid","haider","saifullah"];

 let absent="saifullah"

 let newGuest = "jamal"

 console.log(absent +" " "you can not attend the dinner ");

 Guest [Guest.indexOf(absent)] = newGuest;

 console.log(Guest);

 //task 15 COMPLETED:-

 //task 16:
 
 let Guest=["Muheeb","Ubaid","Haider","Saifullah"];

 let absent="Saifullah"
 let newGuest = "Jamal"
 Guest [Guest.indexOf(absent)] = newGuest;
 console.log(Guest)

  Guest.map((items) => 
  console.log(`Dear ${items}, I found a bigger dinning table so I am inviting more people ` );
 // task 16 part 2 beginning : 
  let Guestbeg :string="Mubeen"
  Guest.unshift(Guestbeg);
  console.log(Guest);
  //  task 16 part 3 Middile :
  let middleGuest :string  =" Hamza" 
  let middleIndex = Guest.length/3
  Guest.splice(middleIndex , 0 , middleGuest);
  console.log(Guest);
                                     

 //  task 16 part 4  append :
 Guest.push("zeeshan");
 console.log(guestArr);
//task 16 part 5 :
Guest.map((items)=> console.log(`Dear ${items} ,you are invited on my birthday party along with your family`))

//task 17:
   while (Guest.length > 2 ) {
       const removedGuest = Guest.pop();
        console.log(`Sorry , ${removedGuest} you are no longer invited to the dinner`);
   }
 //messaging the existing persons:
  Guest.forEach((Guest)=> {
  console.log(`Dear ${Guest}, you are still invited to the dinner.`) )

  }







