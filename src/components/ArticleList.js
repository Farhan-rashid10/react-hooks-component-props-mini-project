import Article from './Article'

function ArticleList({posts}){
    const newPost = posts.map(function(post){
        return <Article key={post.id} title={post.title} preview={post.preview} date={post.date} />
    })
    return (
        <main>
           {newPost}
        </main>
    )
}


export default ArticleList;


