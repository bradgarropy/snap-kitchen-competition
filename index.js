const axios = require("axios")

const generateNames = async number => {
    const response = await axios.get(
        `https://uinames.com/api/?amount=${number}&region=united%20states`,
    )

    const names = response.data.map(name => name.name)
    return names
}

const generateLifters = async number => {
    const names = await generateNames(number)

    let lifters = []

    for (let index = 0; index < number; index++) {
        const lifter = {
            name: names[index],
            squat: 0,
            bench: 0,
            dead: 0,
            total: 0,
        }

        lifters.push(lifter)
    }

    return lifters
}

const randomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const integer = Math.floor(Math.random() * (max - min + 1)) + min
    return integer
}

const main = async() => {
    // generate lifters
    const lifters = await generateLifters(15)

    // simulate lifts
    lifters.forEach(lifter => {
        lifter.squat = randomInteger(0, 1000)
        lifter.bench = randomInteger(0, 1000)
        lifter.dead = randomInteger(0, 1000)

        const {squat, bench, dead} = lifter
        lifter.total = squat + bench + dead
    })

    // determine winners
    console.log(lifters)

    return
}

main()
