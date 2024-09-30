
// node index.js//
const people = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer",
        contact: {
            email: "john.doe@example.com"
        },
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zip: "94105"
        },
        social: {
            twitter: "@johndoe"
        },
        hobbies: ["Coding", "Hiking", "Photography"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer",
        contact: {
            email: "jane.smith@example.com",
            phone: "987-654-3210"
        },
        hobbies: ["Drawing", "Traveling"]
    },
    {
        id: 3,
        name: "Mark Johnson",
        age: 40,
        occupation: "Marketing Manager",
        contact: {
            email: "mark.johnson@example.com",
            phone: "123-456-7890"
        },
        address: {
            street: "789 Oak St",
            city: "Chicago",
            state: "IL",
            zip: "60607"
        },
        hobbies: ["Running", "Golf"]
    }
];



//  node index.js//



let parent = document.getElementById("people-list");
let personinfo = document.getElementById("person-info");
let personlist = (people) => {
    people.map(n => {
        let li = document.createElement("li");
        li.innerText = n.name
        document.getElementById("person-info").classList.add("hidden")

        li.addEventListener("click", () => {
            idchek(n.id)

        })
        parent.appendChild(li)
    })
}


let body = (n) => {
    document.getElementById("no-selection").classList.add("hidden")
    document.getElementById("person-info").classList.remove("hidden")
    personinfo.innerHTML = `
    <h1> ${n.name} </h1>
    <h1> ${n?.address?.city || "N/A"} </h1>
    <h1> ${n.contact?.email} </h1>
    
    `



}


let idchek = (id) => {
    let nam = people.find(f => f.id == id)
    body(nam)


}
personlist(people)
