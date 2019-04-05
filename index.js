const axios = require("axios")
const cli = require("./cli")
const utils = require("./utils")

const generateNames = async number => {
    const response = await axios.get(
        `https://uinames.com/api/?amount=${number}&region=united%20states`,
    )

    const names = response.data.map(name => name.name)
    return names
}

const generateLifters = async(number = 5) => {
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

const simulateLifts = lifters => {
    lifters.forEach(lifter => {
        lifter.squat = utils.randomInteger(0, 1000)
        lifter.bench = utils.randomInteger(0, 1000)
        lifter.dead = utils.randomInteger(0, 1000)

        const {squat, bench, dead} = lifter
        lifter.total = squat + bench + dead
    })

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

const main = async() => {
    // parse arguments
    const args = cli.parse()

    // generate lifters
    const lifters = await generateLifters(args.number)

    // simulate lifts
    simulateLifts(lifters)

    // determine winners
    const winners = determineWinners(lifters)

    // log lifters
    console.log()
    console.log("Lifters")
    console.table(lifters)
    console.log()

    // log winners
    console.log("Winners")
    console.table(winners)

    return
}

main()
