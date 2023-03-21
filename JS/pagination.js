import NewsApiService from './class-pagination/load-more-btn';
import LoadMoreBtn from './class-pagination/news-service';

const refs = {
	searchForm: document.querySelector('.js-search-form'),
	articlesContainer: document.querySelector('.js-articles-container'),
};
const loadMoreBtn = new LoadMoreBtn({
	selector: '[data-action="load-more"]',
	hidden: true,
});
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
	e.preventDefault();

	newsApiService.query = e.currentTarget.elements.query.value;

	if (newsApiService.query === '') {
		return alert('Введи что-то нормальное');
	}

	loadMoreBtn.show();
	newsApiService.resetPage();
	clearArticlesContainer();
	fetchArticles();
}

function fetchArticles() {
	loadMoreBtn.disable();
	newsApiService.fetchArticles().then(articles => {
		appendArticlesMarkup({ url, urlToImage, title, author, description });
		loadMoreBtn.enable();
	});
}

// function appendArticlesMarkup(articles) {
// 	refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

function appendArticlesMarkup({ url, urlToImage, title, author, description }) {
	const markup = ` <li>
    <a href="${url}" target="_blank" rel="noopener noreferrer">
      <article>
        <img src="${urlToImage}" alt="" width="480">
        <h2>${title}</h2>
        <p>Posted by: ${author}</p>
        <p>${description}</p>
      </article>
    </a>
  </li>`;
	refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

function clearArticlesContainer() {
	refs.articlesContainer.innerHTML = '';
}
