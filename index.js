const cli = require("./cli")
const Lifters = require("./lifters")
const Simulate = require("./simulate")
const Winner = require("./winner")

const compete = lifters => {
    const updatedLifters = lifters.map(lifter => {
        const {squat, bench, dead} = Simulate.lifts()

        const updatedLifter = {
            ...lifter,
            squat,
            bench,
            dead,
            total: squat + bench + dead,
        }

        return updatedLifter
    })

    return updatedLifters
}

const podium = lifters => {
    const males = Lifters.males(lifters)
    const females = Lifters.females(lifters)

    const winners = {
        males: {
            squat: Winner.squat(males),
            bench: Winner.bench(males),
            dead: Winner.dead(males),
            total: Winner.total(males),
        },
        females: {
            squat: Winner.squat(females),
            bench: Winner.bench(females),
            dead: Winner.dead(females),
            total: Winner.total(females),
        },
    }

    return winners
}

const summary = (lifters, winners) => {
    console.log()
    console.log("Lifters")
    console.table(lifters)

    console.log()
    console.log("Males")
    console.table(Lifters.males(lifters))

    console.log()
    console.log("Females")
    console.table(Lifters.females(lifters))

    console.log()
    console.log("Winners - Male")
    console.table(winners.males)

    console.log()
    console.log("Winners - Female")
    console.table(winners.females)

    return
}

const main = async() => {
    // parse arguments
    const args = cli.parse()

    // generate lifters
    const lifters = await Lifters.generate(args.number)

    // simulate competition
    const competitors = compete(lifters)

    // determine winners
    const winners = podium(competitors)

    // log summary
    summary(competitors, winners)

    return
}

main()
