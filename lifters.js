const axios = require("axios")

const generatePeople = async number => {
    const response = await axios.get(
        `https://uinames.com/api/?amount=${number}&region=united%20states&ext`,
    )

    const people = response.data
    return people
}

const generateLifters = async(number = 5) => {
    const people = await generatePeople(number)

    const lifters = people.map(person => {
        return {
            firstName: person.name,
            lastName: person.surname,
            gender: person.gender,
            squat: 0,
            bench: 0,
            dead: 0,
            total: 0,
        }
    })

    return lifters
}

const getMales = lifters => {
    const males = lifters.filter(lifter => lifter.gender === "male")
    return males
}

const getFemales = lifters => {
    const females = lifters.filter(lifter => lifter.gender === "female")
    return females
}

module.exports = {
    generate: generateLifters,
    males: getMales,
    females: getFemales,
}
