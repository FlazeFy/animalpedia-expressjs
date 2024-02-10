const express = require('express')
const router = new express.Router()
const repoQuery = require('../repositories/queries')

// Get All Animal Headers
router.get('/api/v1/animal', (req, res) => {
    const page = parseInt(req.query.page)
    const pageSize = 10

    repoQuery.getAllAnimals(req, res, '/api/v1/animal', page, pageSize)
})

// Get All News Headers
router.get('/api/v1/news', (req, res) => {
    const page = parseInt(req.query.page)
    const pageSize = 10

    repoQuery.getAllNews(req, res, '/api/v1/news', page, pageSize)
})

module.exports = router