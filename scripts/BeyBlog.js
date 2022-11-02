import { authorHTML } from "./Authors.js";
import { articleHTML } from "./Articles.js";
import { categoryHTML } from "./Categories.js";

export const BeyBlog = () => {
  return `
        <article class="authors column">
            <h2>Authors</h2>
            <h3> ${authorHTML()} </h3>
        </article>
        <article class="articles column">
            <h2>Articles</h2>
            <h3> ${articleHTML()}
        </article>
        <article class="categories column">
            <h2>Categories</h2>
            <h3> ${categoryHTML()}
        </article>
    `;
};
