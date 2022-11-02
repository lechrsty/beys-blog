import { getCategories } from "./database.js"

const categories = getCategories()

export const categoryHTML = () => {
    let html = "<ul>"

    const listItems = categories.map(category => {
        return `<li id="${category.id}"> ${category.name} 
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
