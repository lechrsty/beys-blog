import { getCategories } from "./database.js";
import { getArticles } from "./database.js";

const categories = getCategories();
const articles = getArticles();

export const categoryHTML = () => {
  let html = "<ul>";

  const listItems = categories.map((category) => {
    return `<li id="category--${category.id}"> ${category.name} 
        </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("category")) {
    const [, categoryId] = itemClicked.id.split("--");
    
    let articleCount = 0;
    for (const category of categories) {
      if (category.id === parseInt(categoryId)) {
        for (const article of articles) {
        //   let articleCount = 0;
          if (article.categoryId === category.id) {
            articleCount++;

          }
        }
        window.alert(`${category.name} has ${articleCount} articles`);
      }
    }
  }
});
