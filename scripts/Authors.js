import { getAuthors } from "./database.js"

const authors = getAuthors()

export const authorHTML = () => {
    let html = "<ul>"

    const listItems = authors.map(author => {
        return `<li id="author--${author.id}" > ${author.name} 
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("author")) {

        const [,authorId] = itemClicked.id.split("--")
    
        for (const author of authors) {
            if (author.id === parseInt(authorId)) {
                window.alert(`${author.bio}`)
            }
        }

        }
    }

)