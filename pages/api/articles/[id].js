import { api } from "../../../config";
import { articleId } from ".";

export default async function handler({ query: { id } }, res) {
  const article = await articleId(id, api);
  if (article === "Not Found") {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  } else {
    res.status(200).json(article);
  }
}

// export default async function handler({ query: { id } }, res) {
//   const articles = await articlesFetch(api);
//   const articleJson = JSON.stringify(articles)
//   //const filtered = articles.filter((article) => article.id === id);
//   let filtered = []
//   for (let obj in articleJson) {
//       if (obj.id === id) {
//         filtered.push(obj)
//       }
//   }
//     articles.forE
//   if (filtered.length > 0) {
//     res.status(200).json(filtered[0]);
//   } else {
//     res
//       .status(404)
//       .json({ message: `Article with the id of ${id} is not found /n /nfiltered: ${filtered} \n jsonify ${articleJson}` });
//   }
// }

// export default function handler({ query: { id } }, res) {
//    const filtered = articles.filter(article => article.id === id)

//    if (filtered.length > 0) {
//        res.status(200).json(filtered[0])
//    } else {
//        res.status(404).json({message: `Article with the id of ${id} is not found`})
//    }
// }
