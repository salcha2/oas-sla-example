export function getTeams(_, res) {
    res.send([{ "year": 2019, "province": "Sevilla" }])
}


export function findByid(_, res) {
    res.send({ "year": 2019, "province": "Sevilla" })
}

