const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

// Route 
const getRoute = require('./routes/routes_v1')
const routeCollection = getRoute()
app.use(routeCollection)

app.use(cors())
app.use(express.json())
app.listen(port, () => {
    console.log('Animalpedia API is running')
})