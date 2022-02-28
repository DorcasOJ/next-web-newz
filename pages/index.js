import { server } from "../config";
import Head from "next/Head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles, articles2 }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles
    },
  };
};

// const apiKey = 'f69b33c1639044108e76fc692e1bd9d6'
// const api = `https://newsapi.org/v2/everything?q=web&q=tech&language=en&apiKey=${apiKey}`
// const fetchRes = await fetch(api);
// const resJson = await fetchRes.json();
// const articles = await resJson.articles;
// articles.forEach((article, index) => article.id = index + 1)
// console.log(articles)

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=8`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
