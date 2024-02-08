const express = require('express')
const app = express()
const router = new express.Router()
const repoQuery = require('../repositories/queries')

router.get('/api/v1/tag/:ord', (req, res) => {
    const ord = req.params.ord

    repoQuery(req, res, ord)
})

module.exports = router