import ArticleContent from "./ArticleContent";
import { getArticleBySlug } from "../../sanity/utils";

export default async function ArticlePage({ params }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleContent article={article} />;
}
