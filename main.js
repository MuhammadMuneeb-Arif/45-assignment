"use strict";
// // //TASK 1: 
// // // completed
// // //TASK 2:
// //  let Name="Haider"
// //  console.log( "hello      " , Name +",",`"would you like to learn some python today? "`);
// //  //task 3:
// //  let personName:string=" muneeb";
// //  console.log("uppercase:", personName.toUpperCase() );
// //  console.log("lowercase:",personName.toLowerCase());
// //  console.log("titlecase:",personName.replace (/\b\w/g, c=> c.toUpperCase()));
// //   //TASK 4:
// //   let famous_person:string="QUAID-E-AZAM"
// //   let Quote:string="there is no power on earth that can undo pakistan"
// //   console.log(`${famous_person} once said," ${Quote}"`);
// //  //task 5:
// //  let Author ="Henry Ford";
// //  let Quote:string ="WHETHER YOU THINK YOU CAN OR THINK YOU CAN'T YOU'RE RIGHT"
// //  console.log(`${Author} once said," ${Quote}"`);
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const favorite_car = createCar("Volkswagen", "Buggati", { color: 'blue and black', year: '2024' });
console.log(favorite_car);
