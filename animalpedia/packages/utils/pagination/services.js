function buildPaginationResponse(page, pageSize, total, totalPages, path) {
    const baseURL = "http://127.0.0.1:9000/"
    const pagination = {
        first_page_url: "",
        from: 0,
        last_page: totalPages,
        last_page_url: "",
        links: [],
        next_page_url: "",
        path: "",
        prev_page_url: "",
        to: 0
    }

    const from = ((page - 1) * pageSize) + 1
    let to = from + pageSize - 1
    if (to > total) {
        to = total
    }

    const firstPageURL = `${baseURL}${path}?page=1`
    pagination.first_page_url = firstPageURL
    const lastPageURL = `${baseURL}${path}?page=${totalPages}`
    pagination.last_page_url = lastPageURL

    let nextPageURL = ""
    if (page < totalPages) {
        nextPageURL = `${baseURL}${path}?page=${page + 1}`
    }
    pagination.next_page_url = nextPageURL

    let prevPageURL = ""
    if (page > 1) {
        prevPageURL = `${baseURL}${path}?page=${page - 1}`
    }
    pagination.prev_page_url = prevPageURL

    const links = []
    for (let i = 1; i <= totalPages; i++) {
        const link = {
            url: `${baseURL}${path}?page=${i}`,
            label: `${i}`,
            active: i === page
        }
        links.push(link)
    }
    pagination.links = links

    pagination.from = from
    pagination.to = to
    pagination.path = `${baseURL}${path}`

    return pagination
}

module.exports = buildPaginationResponse
