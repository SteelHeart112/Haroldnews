const getData = async () => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe"
    const render = await fetch(url)
    const {articles} = await render.json()
    renderNewsData (articles)
}
getData ()

const renderNews = ({url, title, content, urlToImage, description, publishedAt, 
    source: {name}
}) => {
	const dateFormat = moment(publishedAt).format('lll')
  return `
    <h1><a href="${url}">${title}</a></h1>
    <h3>${description}</h3>
    <a href="${url}"> <img src="${urlToImage}" style="height: 20%; width: 40% "> </a>
    <h5>${dateFormat}</h5>
    <h6>${name}</h6>
    <p>${content}</p>`
}

const renderNewsData = news => {
	const newsHTML = news.map(renderNews)
    document.getElementById('newsList').innerHTML = newsHTML.join('\n')
}