const getData = async () => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe"
    const req = await fetch(url)
    const {articles} = await req.json()
    renderNewsData (articles)
}
getData ()

const renderNewsData = (newsArticles) => {
    let html = "";
    newsArticles.map(({url, title, content, urlToImage, description, publishedAt, 
    source: {name}
}, idx) => { 
	const dateFormat = moment(publishedAt).format('lll')
    html += `
    <h1><a href="${url}">${title}</a></h1>
    <h3>${description}</h3>
    <a href="${url}"> <img src="${urlToImage}" style="height: 20%; width: 40% "> </a>
    <h5>${dateFormat}</h5>
    <h6>${name}</h6>
    <p>${content}</p>
    <a href="${url}">Read more</a>`
    document.getElementById("newsList").innerHTML = html;
})
showNumberOfArticles(newsArticles);
}

const getDataMore = async () => {
    const urlMore = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b06be0acad0b4144a1d85f5ea0b6588f"
    const reqMore = await fetch(urlMore)
    const {articles} = await reqMore.json()
    renderNewsDataMore (articles)
}
getData ()

const renderNewsDataMore = (newsArticlesMore) => {
    let html = "";
    newsArticlesMore.map(({url, title, content, urlToImage, description, publishedAt, 
    source: {name}
}, idx) => { 
	const dateFormat = moment(publishedAt).format('lll')
    html += `
    <h1><a href="${url}">${title}</a></h1>
    <h3>${description}</h3>
    <a href="${url}"> <img src="${urlToImage}" style="height: 20%; width: 40% "> </a>
    <h5>${dateFormat}</h5>
    <h6>${name}</h6>
    <p>${content}</p>
    <a href="${url}">Read more</a>`
    document.getElementById("load-more-btn").innerHTML = "No More News To Show";
    document.getElementById("load-more").style.display = "block";
    document.getElementById("load-more").innerHTML = html;
})
showNumberOfArticlesMore(newsArticlesMore);
}

let numberOfArticlesArray = [];

const showNumberOfArticles = (numberOfArticles) => {
    let totalArticles = 0;
    numberOfArticles.map(_ => {
        totalArticles = numberOfArticles.length;
        numberOfArticlesArray.push(totalArticles);
    });
    document.getElementById("number-news").innerHTML = totalArticles;
}

const showNumberOfArticlesMore = (numberOfArticles) => {
    let totalArticles = 0;
    numberOfArticles.map(_ => {
        totalArticles = numberOfArticles.length;
        numberOfArticlesArray.push(totalArticles);
    });
    for (let i = 0; i < numberOfArticles.length; i++) {
    document.getElementById("number-news").innerHTML = numberOfArticlesArray[i] + numberOfArticlesArray[i+1];
}
}
