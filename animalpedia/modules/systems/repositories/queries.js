const connection = require('../../../configs/configs')
const generateQueryMsg = require('../../../packages/helpers/generator')

const baseTable = 'tags'

function getAllTags(req, res, ord){
    const sqlStatement = "SELECT tags_slug, tags_name " +
        "FROM " + baseTable + " " +
        "ORDER BY tags_name " + ord

    connection.query(sqlStatement, (err, rows, fields) => {
        if (err) {
            res.status(500).send(err)
        } else {
            const len = rows.length
            res.status(200).json({ 
                message: generateQueryMsg(baseTable,len), 
                status: 200, 
                data: rows 
            })
        }
    })
}

module.exports = getAllTags