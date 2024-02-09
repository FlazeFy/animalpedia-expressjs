const express = require('express')
const router = new express.Router()
const repoQuery = require('../repositories/queries')

// Get Total Animal By Zone
router.get('/api/v1/stats/animalzone/:ord', (req, res) => {
    const ord = req.params.ord
    const view = "animals_zone"
    const table = "animals"

    repoQuery.getTotalStats(res, ord, view, table)
})

// Get Total Animal By Status
router.get('/api/v1/stats/animalstatus/:ord', (req, res) => {
    const ord = req.params.ord
    const view = "animals_status"
    const table = "animals"

    repoQuery.getTotalStats(res, ord, view, table)
})

module.exports = router