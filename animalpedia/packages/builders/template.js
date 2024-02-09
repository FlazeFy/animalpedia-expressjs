function getTemplateSelect(name, firstTable, secondTable) {
	if (name == "content_info") {
		return firstTable + "_slug," + firstTable + "_name"
	} else if (name == "properties_time") {
		return "created_at, created_by"
	} else if(name == "properties_full") {
		return "created_at, created_by, updated_at, updated_by"
	}
}

function getTemplateOrder(name, tableName, ext) {
	if (name == "permanent_data") {
		return tableName + ".created_at DESC, " + tableName + "." + ext + " DESC "
	} else if (name == "dynamic_data") {
		return tableName + ".updated_at DESC, " + tableName + ".created_at DESC, " + tableName + "." + ext + " DESC "
	} else if (name == "most_used_normal") {
		return " COUNT(1) DESC"
	}
}

function getTemplateLogic(name) {
	if (name == "active") {
		return "deleted_at IS NULL "
	} else if (name == "trash") {
		return "deleted_at IS NOT NULL "
	}
}

// Stats
function getTemplateStats(ctx, firstTable, name, ord, joinArgs) {
	// Nullable args
	let args = ''
	if (joinArgs == null) {
		args = ""
	} else {
		args = joinArgs
	}
	// Notes :
	// Full query
	if (name == "most_appear") {
		return "SELECT " + ctx + " as context, COUNT(1) AS total FROM " + firstTable + " " + args + " GROUP BY " + ctx + " ORDER BY total " + ord
	}
}

module.exports = {
	getTemplateSelect,
	getTemplateOrder,
	getTemplateLogic,
    getTemplateStats
}