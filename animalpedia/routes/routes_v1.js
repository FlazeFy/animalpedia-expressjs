const express = require('express')
const app = express()

function getRoute(){
    const routerSystem = require('../modules/systems/http_handlers/http_handlers')
    const routerStats = require('../modules/stats/http_handlers/http_handlers')
    
    app.use(routerSystem)
    app.use(routerStats)

    return app
}

module.exports = getRoute