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
    getTemplateStats
}