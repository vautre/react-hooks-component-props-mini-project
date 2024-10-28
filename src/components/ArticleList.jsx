import Article from "./Article.jsx"
 
function ArticleList({posts}) {
    return (
    <main> 
        {posts.map(article => (
            <Article
                key={article.id}
                title={article.title}
                data={article.data}
                preview={article.preview} />
        ))}
        </main>
    )}

export default ArticleList