const generate_team = lifters => {
    return [...Array(lifters).keys()]
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

const t1 = generate_team(1000)
const t2 = generate_team(1000)

console.log(t1)
console.log(t2)

let t1Wins = 0
let t2Wins = 0

// while remaining members in T1 and T2
t1.forEach((member, index) => {
    const t1Lifter = {name: t1[index], weight: 0}
    const t2Lifter = {name: t2[index], weight: 0}

    t1Lifter.weight = getRandomInt(5, 1000)
    t2Lifter.weight = getRandomInt(5, 1000)

    console.log(t1Lifter, t2Lifter)

    if (t1Lifter.weight > t2Lifter.weight) {
        console.log(`${t1Lifter.name} (T1) wins!`)
        t1Wins = t1Wins + 1
    } else {
        console.log(`${t2Lifter.name} (T2) wins!`)
        t2Wins = t2Wins + 1
    }
})

if (t1Wins > t2Wins) {
    console.log("T1 WINS!")
} else if (t2Wins > t1Wins) {
    console.log("T2 WINS!")
} else {
    console.log("TIE!")
}
