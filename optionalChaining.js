// node optionalChaining.js//

const petOwner = {
    name: "Jolonto Kholil",
    contact: {
      phone: "09376253",
      email: "xyz@gmail.com",
    },
    pet: {
      name: "Lofie",
      info: {
        color: "black",
        weight: "1.2kg",
        food: ["apple","orange","pepeya"]
      },
    },
  };
// akhn theke ami orange ta ber korbo//

console.log(petOwner?.pet?.info?.food[1]);