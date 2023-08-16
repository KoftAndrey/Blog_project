'use strict';

// Получить данные
const loadArticleData = async (articleNumber) => {
  const result = await fetch(`https://gorest.co.in/public-api/posts/${articleNumber}`);
  const data = await result.json();

  const authorRequest = await fetch(`https://gorest.co.in/public-api/users/${4326916}`);
  const authorData = await authorRequest.json();
  const author = authorData.data.name ? authorData.data.name : 'Several authors';

  const page = sessionStorage.getItem('currentPage');

  return {
    id: data.data.id,
    title: data.data.title,
    body: data.data.body,
    page,
    author,
  };
};

// Создать заголовок статьи
const setArticleTitle = (title) => {
  const articleTitle = document.querySelector('.article__title');
  articleTitle.textContent = title;
};

// Создать текст статьи
const setArticleText = (body) => {
  const articleText = document.querySelector('.article__text');
  articleText.textContent = body;
};

// Указать автора статьи
const setArticleAuthor = (author) => {
  const authorBlock = document.querySelector('.article__author');
  authorBlock.textContent = author;
};

// Выставить ссылки в навигации
const setBreadcrumbs = (title, id) => {
  const crumbsArticle = document.querySelector('.article-breadcrumbs__link_article');
  crumbsArticle.textContent = title;
  crumbsArticle.setAttribute('href', `article.html?id=${id}`);
};

// Установить обратную ссылку
const setBackToBlogBtn = page => {
  const backToBlogBtn = document.querySelector('.article__back-button');
  const href = page === '1' ? 'blog.html' : `blog.html?page=${page}`;
  backToBlogBtn.setAttribute('href', href);
};

// Рендер статьи
const renderArticle = async (articleNumber) => {
  const {id, title, body, page, author} = await loadArticleData(articleNumber);

  setBreadcrumbs(title, id);
  setArticleTitle(title);
  setArticleText(body);
  setArticleAuthor(author);
  setBackToBlogBtn(page);
};


renderArticle(location.search.slice(4));
