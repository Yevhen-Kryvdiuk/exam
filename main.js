'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const articleListCont = document.getElementById('article-list');
    const promise = fetch('http://my-json-server.typicode.com/mate-academy/literary-blog/articles')
        .then((data => {
            return data.json()
        }))
        .then(articles =>{
            const articleList = new ArticleList(articleListCont);
            articles.forEach( item => {
                const article = new Article(item.title, item.author, item.text);
                articleList.addArticle(article);
            });
            return articleList;
        })
        .then( articleList => {
            articleList.render();
            return articleList;
        });
    // document.addEventListener('click', (event) => {
    //     const target = event.target;
    //     if (target.tagName === 'BUTTON') {
    //         promise.removeArticle(target.dataset);
    //         promise.render();
    //     }
    // });
});