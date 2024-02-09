const connection = require('../../../configs/configs')
const generateQueryMsg = require('../../../packages/helpers/generator')
const buildPaginationResponse = require('../../../packages/utils/pagination/services')
const builders = require('../../../packages/builders/template')

const baseTable = 'animals'

function getAllAnimals(req, res, path, page, pageSize){
    // Query Builder
    selectTemplate = builders.getTemplateSelect("content_info", baseTable, null)
	activeTemplate = builders.getTemplateLogic("active")
	order = builders.getTemplateOrder("dynamic_data", baseTable, "animals_name")

    const offset = (page - 1) * pageSize
    const sqlStatement = "SELECT " + selectTemplate + ", animals_latin_name, animals_img_url, animals_region, animals_zone, animals_status, animals_category " +
        "FROM " + baseTable + " " +
        "WHERE " + activeTemplate + " " +
        "ORDER BY " + order + " " +
        "LIMIT "+pageSize+" OFFSET "+offset

    connection.query(sqlStatement, (err, rows, fields) => {
        if (err) {
            res.status(500).send(err)
        } else {
            // Page
            const total = rows.length
            const totalPages = Math.ceil(total / pageSize);
            const pagination = buildPaginationResponse(page, pageSize, total, totalPages, path)

            // Response
            let rowsFinal = rows
            if(total != 0){
                rowsFinal = {
                    "current_page": page,
                    "data": rows,
                    "first_page_url": pagination.first_page_url,
                    "from": pagination.from,
                    "last_page": pagination.last_page,
                    "last_page_url": pagination.last_page_url,
                    "links": pagination.links,
                    "next_page_url": pagination.next_page_url,
                    "path": pagination.path,
                    "per_page": pageSize,
                    "prev_page_url": pagination.prev_page_url,
                    "to": pagination.to,
                    "total": total,
                }
            }
            
            res.status(200).json({ 
                message: generateQueryMsg(baseTable,total), 
                status: 200, 
                data: rowsFinal 
            })
        }
    })
}

module.exports = {
    getAllAnimals
}