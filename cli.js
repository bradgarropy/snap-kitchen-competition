const cmdr = require("commander")

const parse = () => {
    cmdr.option("-n, --number <number>", "Number of lifters.").parse(
        process.argv,
    )

    return cmdr
}

module.exports = {
    parse,
}
