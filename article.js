'use strict';

class Article {
    constructor(title, author, text) {
        this.title = title;
        this.author = author;
        this.text = text;
    }

    matches(query) {
        const allInfo = [this.title, this.author, this.text];
        const Reg = new RegExp(`${query}`, 'i');
        return allInfo.some( item => {
            return item.match(Reg);
        })
    }
}

