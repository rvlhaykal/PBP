var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

// kelompokkan berdasarkan negara pemenang
let groupedWinners = {};

for (let race of motoGP) {
    let country = race.winner.country;
    if (!groupedWinners[country]) {
        groupedWinners[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    groupedWinners[country].winningCircuits.push({
        name: `${race.winner.firstName} ${race.winner.lastName}`,
        winLocation: `${race.circuit}, ${race.location}`
    });
    groupedWinners[country].totalWin++;
}

console.log(groupedWinners);
