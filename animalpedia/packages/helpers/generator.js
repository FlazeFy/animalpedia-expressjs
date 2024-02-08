function generateQueryMsg(ctx, total) {
    ctx = ctx.charAt(0).toUpperCase() + ctx.slice(1)

    if (total > 0) {
        return ctx + " found"
    } else {
        return ctx + " not found"
    }
}

module.exports = generateQueryMsg