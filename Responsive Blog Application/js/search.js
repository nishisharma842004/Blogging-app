document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.nav-right input[type="text"]');
    const searchButton = document.querySelector('.nav-right .btn');
    const articlesContainer = document.querySelector('.articles');
    const filterYearLinks = document.querySelectorAll('.filter-year a');
    
    // Sample articles data
    const articles = [
        { title: 'Article 1 about Django', author: 'Author 1', date: '07 January 2023', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
        { title: 'Article 2 about Django', author: 'Author 2', date: '15 February 2023', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
        { title: 'Article 3 about Django', author: 'Author 3', date: '22 March 2023', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
        { title: 'Article 4 about Django', author: 'Author 4', date: '30 April 2024', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
        { title: 'Article 5 about Django', author: 'Author 5', date: '07 May 2024', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
        { title: 'Article 6 about Django', author: 'Author 6', date: '14 June 2024', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' }
    ];

    // Function to render articles
    function renderArticles(filteredArticles) {
        articlesContainer.innerHTML = '';
        filteredArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <span>${article.author}</span>
                <span>${article.date}</span>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    // Function to filter articles by search term
    function filterArticlesBySearch(searchTerm) {
        const filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderArticles(filteredArticles);
    }

    // Function to filter articles by year
    function filterArticlesByYear(year) {
        const filteredArticles = articles.filter(article =>
            article.date.includes(year)
        );
        renderArticles(filteredArticles);
    }

    // Event listener for search button
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        filterArticlesBySearch(searchTerm);
    });

    // Event listeners for year filter links
    filterYearLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const year = link.getAttribute('href').split('=')[1];
            filterArticlesByYear(year);
        });
    });

    // Initial render
    renderArticles(articles);
});
