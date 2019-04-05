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

const determineWinner = (lifters, category) => {
    const winner = lifters.reduce((winner, lifter) => {
        if (lifter[category] > winner[category]) {
            return lifter
        }

        return winner
    })

    return winner
}

const determineWinners = lifters => {
    const winners = {
        squat: determineWinner(lifters, "squat"),
        bench: determineWinner(lifters, "bench"),
        dead: determineWinner(lifters, "dead"),
        total: determineWinner(lifters, "total"),
    }

    return winners
}

const randomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const integer = Math.floor(Math.random() * (max - min + 1)) + min
    return integer
}

const main = async() => {
    // generate lifters
    const lifters = await generateLifters(5)

    // simulate lifts
    lifters.forEach(lifter => {
        lifter.squat = randomInteger(0, 1000)
        lifter.bench = randomInteger(0, 1000)
        lifter.dead = randomInteger(0, 1000)

        const {squat, bench, dead} = lifter
        lifter.total = squat + bench + dead
    })

    // determine winners
    const winners = determineWinners(lifters)
    console.log(winners)

    return
}

main()
