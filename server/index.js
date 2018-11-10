require ('dotenv').config()
const bodyParser = require ('body-parser')
const express = require ('express')
const massive = require ('massive')
const controller = require('./controller')


const app=express()
const {SERVER_PORT, CONNECTION_STRING}= process.env

app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})

app.get('api/house', controller.getHouses)
app.post('api/house/:id', controller.addHouse)
app.delete('api/house/delete', controller.deleteHouse)


app.listen(SERVER_PORT, () => console.log('db is listening on', SERVER_PORT))
