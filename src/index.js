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