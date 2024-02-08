const express = require('express')
const app = express()

function getRoute(){
    const routerSystem = require('../modules/systems/http_handlers/http_handlers')
    
    app.use(routerSystem)

    return app
}

module.exports = getRoute