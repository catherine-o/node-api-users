const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


const db = require('./database_connection')

app.get('/', (req, res) => {
    db.getUsers()
        .then(users => res.json(users))
})

app.post('/', (req, res) => {
    db.createUser(req.body.name)
        .then(id => {
            db.getUser(id)
                .then(user => res.json(user))
        })
})

app.put('/:id', (req, res) => {
    db.updateUser(req.body.name, req.params.id)
        .then(user => res.json(user))
})

app.delete('/:id', (req, res) => {
    db.deleteUser(req.params.id)
        .then(response => res.json(response))
})



const port = process.env.PORT || 8080


app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})