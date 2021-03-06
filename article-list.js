'use strict';

class ArticleList {
    constructor(container) {
        this.container = container;
        this.articles = new Set();
    }

    addArticle(article) {
        this.articles.add(article);
    }

    removeArticle(article) {
        this.articles.delete(article);
    }

    render () {
        this.container.innerHTML = '';
        this.articles.forEach( item => {
            const article = document.createElement('div');
            const header = document.createElement('h3');
            const author = document.createElement('spun');
            const text = document.createElement('p');
            const btn = document.createElement('button');
            btn.innerText = 'delete';
            btn.dataset.Article = item; // не работает, было бы лучше если ыбло бы айди
            header.innerText = item.title;
            article.appendChild(header);
            author.innerText = item.author;
            article.appendChild(author);
            text.innerText = item.text;
            article.appendChild(text);
            article.appendChild(btn);
            this.container.appendChild(article);
        })
    }
}
