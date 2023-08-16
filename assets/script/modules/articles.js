const articlesList = document.querySelector('.articles__list');

// Создать карточку статьи
const createArticleCard = ({id, title}, index) => {
  const articlePreview = document.createElement('li');
  articlePreview.classList.add('articles__article-preview', 'article-preview');

  const articleLink = document.createElement('a');
  articleLink.classList.add('article-preview__link');
  articleLink.setAttribute('href', `article.html?id=${id}`);
  articleLink.insertAdjacentHTML('beforeend', `

  <div class="article-preview__image-block">
    <img src="assets/styles/articles/img/img_${index + 1}.jpg" alt="article cover" class="article-preview__image">
  </div>

  <div class="article-preview__info-block">

                        <h3 class="article-preview__title">
                            ${title}
                        </h3>

                        <div class="article-preview__extra">

                        <p class="article-preview__date">
                            <span class="article-preview__date-day">22 </span>
                            <span class="article-preview__date-month">october </span>
                            <span class="article-preview__date-year">2021, </span>
                            <span class="article-preview__date-time">12:45</span>
                        </p>

                        <div class="article-preview__details">

                            <div class="article-preview__details-block">

                                <div class="article-preview__details-icon_views">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M21.257 11.462C21.731 12.082 21.731 12.919 21.257 13.538C19.764 15.487 16.182 19.5 12 19.5C7.81801 19.5 4.23601 15.487 2.74301 13.538C2.51239 13.2411 2.38721 12.8759 2.38721 12.5C2.38721 12.1241 2.51239 11.7589 2.74301 11.462C4.23601 9.513 7.81801 5.5 12 5.5C16.182 5.5 19.764 9.513 21.257 11.462V11.462Z" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p class="article-preview__details_views">1.2K</p>

                            </div>

                            <div class="article-preview__details-block">

                                <div class="article-preview__details-icon_comments">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_1676_14)">
                                          <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" fill="#8F8F8F"/>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1676_14">
                                            <rect width="24" height="24" fill="white"/>
                                          </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p class="article-preview__details_comments">0</p>

                            </div>

                            </div>

                        </div>

                      </div>
  `);

  articlePreview.append(articleLink);

  return articlePreview;
};

// Создать список статей текущей страницы
const createArticlesList = arr => arr.map((elem, index) => createArticleCard(elem, index));

// Отрендерить статьи
const renderArticles = articles => {
  const articlesElements = createArticlesList(articles);
  articlesList.append(...articlesElements);
};

export {renderArticles};

