'use strict'
const axios = require('axios')

class ArticleController {
    async home({ view, response }) {
        const news = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=2fb1dc7f5186499bb2ff98aa37073589')
        return view.render('index', {
            news: news.data.articles
        })
    }
}

module.exports = ArticleController
