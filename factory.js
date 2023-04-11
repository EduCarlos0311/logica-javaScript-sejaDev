function Person (name, lastName) {
    let person = {
        name,
        lastName
    }

    person.fullName = ` ${name} ${lastName} `
    return person
}

const personA = Person("Carlos", "Santos")
const personB = Person("José", "Fortes")

console.log(personA, personB)