// Handle the search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (query) {
        searchArticles(query);
    }
});

function searchArticles(query) {
    const articles = document.querySelectorAll('.article h3');
    articles.forEach(article => {
        const title = article.innerText.toLowerCase();
        const articleElement = article.closest('.article');
        if (title.includes(query)) {
            articleElement.style.display = 'block';
        } else {
            articleElement.style.display = 'none';
        }
    });
}

// Load related articles dynamically
document.addEventListener('DOMContentLoaded', function() {
    const relatedArticlesData = [
        {
            imgSrc: 'img/4.png',
            link: '/blogs.html',
            title: 'Learn more about Machine Learning techniques in India by joining this channel',
            author: 'Author Name',
            date: '07 January',
            readTime: '6 min read'
        },
        {
            imgSrc: 'img/3.png',
            link: '/blogs.html',
            title: 'Learn more about Machine Learning techniques in India by joining this channel',
            author: 'Author Name',
            date: '07 January',
            readTime: '6 min read'
        },
        {
            imgSrc: 'img/2.png',
            link: '/blogs.html',
            title: 'Learn more about Machine Learning techniques in India by joining this channel',
            author: 'Author Name',
            date: '07 January',
            readTime: '6 min read'
        }
    ];

    const relatedArticlesContainer = document.querySelector('.related-articles .article-grid');
    relatedArticlesContainer.innerHTML = '';

    relatedArticlesData.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article post-img';
        articleElement.innerHTML = `
            <a href="${article.link}">
                <img src="${article.imgSrc}" width="400px" alt="Related Article">
                <h3>${article.title}</h3>
                <p>${article.author}</p>
                <p>${article.date} | ${article.readTime}</p>
            </a>
        `;
        relatedArticlesContainer.appendChild(articleElement);
    });
});

