const connection = require('../../../configs/configs')
const template = require('../../../packages/builders/template')
const generateQueryMsg = require('../../../packages/helpers/generator')

function getTotalStats(res, ord, mainCol, baseTable){
    // Query Builder
    const sqlStatement = template.getTemplateStats(mainCol, baseTable, "most_appear", ord, null)

    connection.query(sqlStatement, (err, rows, fields) => {
        if (err) {
            res.status(500).send(err)
        } else {        
            res.status(200).json({ 
                message: generateQueryMsg(baseTable,1), 
                status: 200, 
                data: rows
            })
        }
    })
}

module.exports = {
    getTotalStats
}