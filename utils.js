const randomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const integer = Math.floor(Math.random() * (max - min + 1)) + min
    return integer
}

module.exports = {
    randomInteger,
}
