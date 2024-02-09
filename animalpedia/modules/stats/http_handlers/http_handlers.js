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

// Get Total Animal Category
router.get('/api/v1/stats/animalcategory/:ord', (req, res) => {
    const ord = req.params.ord
    const view = "animals_category"
    const table = "animals"

    repoQuery.getTotalStats(res, ord, view, table)
})

// Get Total Animal Region
router.get('/api/v1/stats/animalregion/:ord', (req, res) => {
    const ord = req.params.ord
    const view = "animals_region"
    const table = "animals"

    repoQuery.getTotalStats(res, ord, view, table)
})

// Get Total News Time Read
router.get('/api/v1/stats/newstimeread/:ord', (req, res) => {
    const ord = req.params.ord
    const view = "news_time_read"
    const table = "news"

    repoQuery.getTotalStats(res, ord, view, table)
})

// Get Total Comment Context
router.get('/api/v1/stats/commentcontext/:ord', (req, res) => {
    const ord = req.params.ord
    const view = "context_type"
    const table = "comments"

    repoQuery.getTotalStats(res, ord, view, table)
})

module.exports = router