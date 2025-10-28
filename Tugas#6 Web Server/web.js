// Import module http
const http = require("http");

// Data MotoGP
const motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: { firstName: "Andrea", lastName: "Dovizioso", country: "Italy" },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: { firstName: "Cal", lastName: "Crutchlow", country: "UK" },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: { firstName: "Valentino", lastName: "Rossi", country: "Italy" },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: { firstName: "Andrea", lastName: "Dovizioso", country: "Italy" },
  },
];

// Membuat server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    // Tampilkan seluruh data
    res.end(JSON.stringify(motoGP, null, 2));
  } else if (req.url === "/country") {
    // Kelompokkan berdasarkan negara
    const groupedByCountry = {};
    motoGP.forEach((race) => {
      const country = race.winner.country;
      if (!groupedByCountry[country]) groupedByCountry[country] = [];
      groupedByCountry[country].push(race);
    });
    res.end(JSON.stringify(groupedByCountry, null, 2));
  } else if (req.url === "/name") {
    // Kelompokkan berdasarkan nama pemenang
    const groupedByName = {};
    motoGP.forEach((race) => {
      const name = race.winner.firstName + " " + race.winner.lastName;
      if (!groupedByName[name]) groupedByName[name] = [];
      groupedByName[name].push(race);
    });
    res.end(JSON.stringify(groupedByName, null, 2));
  } else {
    // Jika URL tidak dikenal
    res.statusCode = 400;
    res.end(JSON.stringify({ message: "Bad Request" }));
  }
});

// Jalankan server
server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});