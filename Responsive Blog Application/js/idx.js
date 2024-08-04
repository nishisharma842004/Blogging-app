// Handle the search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (query) {
        searchArticles(query);
    }
});

function searchArticles(query) {
    const articles = document.querySelectorAll('.home-article');
    articles.forEach(article => {
        const title = article.querySelector('h3').innerText.toLowerCase();
        if (title.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

// Load featured articles dynamically
document.addEventListener('DOMContentLoaded', function() {
    const articlesData = [
        {
            imgSrc: 'img/11.svg',
            link: '/blogs.html',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            author: 'Author Name',
            date: '07 January',
            readTime: '6 min read'
        },
        // Add more article objects here
    ];

    const articlesContainer = document.querySelector('.home.articles');
    articlesContainer.innerHTML = '<hr><h2>Featured Articles</h2>';

    articlesData.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'home-article';
        articleElement.innerHTML = `
            <div class="home-article-img">
                <img src="${article.imgSrc}" alt="article">
            </div>
            <div class="home-article-content font1">
                <a href="${article.link}"><h3>${article.title}</h3></a>
                <span>${article.author}</span>
                <br>
                <span>${article.date} | ${article.readTime}</span>
            </div>
        `;
        articlesContainer.appendChild(articleElement);
    });
});
