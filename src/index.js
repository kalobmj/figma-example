// use map to generate articles
// possibly use api to pull data and picture
// use curr date

const articleCard = document.getElementById('article-card');
const articleCardContainer = document.getElementById('article-container')

console.log({articleCard});
console.log({articleCardContainer});

const articleCards = [];

// fill up article container
for (let i=1; i<9; i++) {

    articleCards.push(articleCard)

}

console.log({articleCards});

articleCards.map(article => {
    const clonedArticle = article.cloneNode(true);
    articleCardContainer.appendChild(clonedArticle)
})

// work on styling articles so that they display correctly. then we can work on pulling data for each article

// https://inshorts.deta.dev/news?category={category_name}

// https://inshorts.deta.dev/news?category=science

const apiUrlScience = 'https://corsproxy.io/?url=https://inshorts.deta.dev/news?category=science';

// const apiMediaStackScienceUrl = 'http://api.mediastack.com/v1/news?access_key=c9b1d6034c94d5271701ad8923a8f95b&categories=science';

// fetch(apiMediaStackScienceUrl)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network response not ok');
//         }
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error', error)
//     });

// https://corsproxy.io/?url=https://example.com

// http://api.mediastack.com/v1/news
//     ? access_key = c9b1d6034c94d5271701ad8923a8f95b
//     & categories = science

// http://api.mediastack.com/v1/news?access_key=c9b1d6034c94d5271701ad8923a8f95b&categories=science


