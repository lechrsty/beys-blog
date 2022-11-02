import { getArticles, getAuthors } from "./database.js"

const articles = getArticles()
const authors = getAuthors()

export const articleHTML = () => {
    let html = "<ul>"

    const listItems = articles.map(article => {
        return `<li id="article--${article.id}"> ${article.headline} 
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
        if (itemClicked.id.startsWith("article")) {

        const [,articleId] = itemClicked.id.split("--")
    
        for (const article of articles) {
            if (article.id === parseInt(articleId)) {
                for (const author of authors) {
                    if (article.authorId === author.id) {
                        window.alert(`${article.body} -- ${author.name}`)
                    }
                }
            }
        }

        }
    }

)