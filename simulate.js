const utils = require("./utils")

const simulateSquat = () => utils.randomInteger(135, 855)
const simulateBench = () => utils.randomInteger(135, 495)
const simulateDead = () => utils.randomInteger(135, 945)

const simulateLifts = () => {
    const squat = simulateSquat()
    const bench = simulateBench()
    const dead = simulateDead()

    const lifts = {
        squat,
        bench,
        dead,
    }

    return lifts
}

module.exports = {
    squat: simulateSquat,
    bench: simulateBench,
    dead: simulateDead,
    lifts: simulateLifts,
}
