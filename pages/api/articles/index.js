import { api } from "../../../config"

export default async function handler(req, res) {
    // const fetchRes = await fetch(api);
    // const resJson = await fetchRes.json();
    // const articles = await resJson.articles;
    // articles.forEach((article, index) => article.id = index + 1)
    const articles = await articlesFetch(api)
    res.status(200).json(articles)
}

async function articlesFetch(api) {
   const fetchRes = await fetch(api)
        .catch((error) => {
        console.log(error)
        });
    const resJson = await fetchRes.json();
    const articles = await resJson.articles;
    articles.forEach((article, index) => article.id = index + 1)
    return articles
}

export async function articleId(id, api) {
    const articles = await articlesFetch(api)
    const filtered = articles.filter(article => article.id === Number(id))
    if (filtered.length > 0) {
        return filtered[0]
    } else {
        return 'Not Found' ;
    }
}
