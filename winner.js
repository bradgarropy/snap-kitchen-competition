const getWinner = (lifters, category) => {
    const winner = lifters.reduce((winner, lifter) => {
        if (lifter[category] > winner[category]) {
            return lifter
        }

        return winner
    })

    return winner
}

const winnerSquat = lifters => {
    const winner = getWinner(lifters, "squat")
    return winner
}

const winnerBench = lifters => {
    const winner = getWinner(lifters, "bench")
    return winner
}

const winnerDead = lifters => {
    const winner = getWinner(lifters, "dead")
    return winner
}

const winnerTotal = lifters => {
    const winner = getWinner(lifters, "total")
    return winner
}

module.exports = {
    squat: winnerSquat,
    bench: winnerBench,
    dead: winnerDead,
    total: winnerTotal,
}
