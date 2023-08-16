import {renderArticles} from './articles.js';
import {renderPagination} from './pagination.js';

// Получить данные страницы
const loadArticlesData = async (pageNumber) => {
  const result = await fetch(`https://gorest.co.in/public-api/posts?page=${pageNumber}`);
  const data = await result.json();

  const articles = data.data;
  const page = data.meta.pagination.page;
  const max = data.meta.pagination.pages;

  return {articles, page, max};
};


const renderBlog = async (pageNumber) => {
  const {articles, page, max} = await loadArticlesData(pageNumber);

  renderArticles(articles);
  renderPagination(page, max);

  sessionStorage.setItem('currentPage', `${pageNumber ||= '1'}`);
};

export {renderBlog};
