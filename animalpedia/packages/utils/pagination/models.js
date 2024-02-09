class PaginationResponse {
    constructor(firstPageURL, from, lastPage, lastPageURL, links, nextPageURL, path, prevPageURL, to) {
        this.first_page_url = firstPageURL
        this.from = from
        this.last_page = lastPage
        this.last_page_url = lastPageURL
        this.links = links
        this.next_page_url = nextPageURL
        this.path = path
        this.prev_page_url = prevPageURL
        this.to = to
    }
}

class Link {
    constructor(url, label, active) {
        this.url = url
        this.label = label
        this.active = active
    }
}
