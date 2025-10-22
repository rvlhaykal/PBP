function bagi(a, b) {
    if (b === 0) {
        return "Error: Tidak bisa dibagi dengan nol!";
    }
    return a / b;
}

module.exports = bagi;