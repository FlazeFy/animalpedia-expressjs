const express = require('express')
const router = new express.Router()
const repoQueryTags = require('../repositories/queries_tags')
const repoQueryFeedbacks = require('../repositories/queries_feedbacks')

// Get All Tag
router.get('/api/v1/tag/:ord', (req, res) => {
    const ord = req.params.ord
    const page = parseInt(req.query.page)
    const pageSize = 10

    repoQueryTags.getAllTags(req, res, ord, '/api/v1/tag/'+ord, page, pageSize)
})

// Get All Feedback
router.get('/api/v1/feedbacks/:ord_obj/:ord', (req, res) => {
    const ord = req.params.ord
    const ord_obj = req.params.ord_obj
    const page = parseInt(req.query.page)
    const pageSize = 10

    repoQueryFeedbacks.getAllFeedbacks(req, res, ord, ord_obj, '/api/v1/feedback/'+ord_obj+'/'+ord, page, pageSize)
})

module.exports = router