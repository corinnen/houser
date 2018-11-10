module.exports ={
    getHouses:(req, res) => {
        const db=req.app.get('db')
        db.get_houses().then(houses => {
            res.status(200).send(houses)
        })
    },
    addHouse:(req, res) => {
        const db=req.app.get('db')
        db.add_house().then(houses => {
            res.status(200).send(houses)
        })
    },
    deleteHouse: (req, res) => {
        const db=req.app.get('db')
        let {id} = req.params
        db.delete_house(id).then(houses => {
            res.status(200).send(houses)
        })
    }

}