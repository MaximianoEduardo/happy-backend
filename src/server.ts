import express from 'express'

import './database/connection'

// Import express
const app = express()

app.use(express.json())

// rota = conjunto
// recurso = user
// methods = GET, POST, PUT, DELETE


app.get('/users', (req, resp) => {

    return resp.json({message: 'hello world'})

})

// port 3333
app.listen(3333)
