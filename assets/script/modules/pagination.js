const paginationBlock = document.querySelector('.pagination__block');
const pagesList = document.querySelector('.pagination__pages');

// Создать стрелки
const createArrows = max => {
  const firstPageArrow = document.createElement('a');
  firstPageArrow.classList.add('pagination__arrow-prev');
  firstPageArrow.setAttribute('href', 'blog.html');
  firstPageArrow.insertAdjacentHTML('beforeend', `
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
      <g clip-path="url(#clip0_0_255)">
        <path d="M32.375 16.9583H10.5296L16.0487 11.4237L13.875 9.25L4.625 18.5L13.875 27.75L16.0487 25.5763L10.5296 20.0417H32.375V16.9583Z" fill="#8F8F8F"/>
      </g>
      <defs>
        <clipPath id="clip0_0_255">
          <rect width="37" height="37" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `);

  const lastPageArrow = document.createElement('a');
  lastPageArrow.classList.add('pagination__arrow-next');
  lastPageArrow.setAttribute('href', `blog.html?page=${max}`);
  lastPageArrow.insertAdjacentHTML('beforeend', `
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
      <g clip-path="url(#clip0_0_258)">
        <path d="M4.625 16.9583H26.4704L20.9513 11.4237L23.125 9.25L32.375 18.5L23.125 27.75L20.9513 25.5763L26.4704 20.0417H4.625V16.9583Z" fill="#8F8F8F"/>
      </g>
      <defs>
        <clipPath id="clip0_0_258">
          <rect width="37" height="37" fill="white" transform="matrix(-1 0 0 1 37 0)"/>
        </clipPath>
      </defs>
    </svg>
  `);

  return {firstPageArrow, lastPageArrow};
};

// Проверить стрелки пагинации
const checkPaginationArrows = (arrowPrev, arrowNext, page, max) => {
  switch (page) {
    case 1:
      arrowPrev.classList.add('pagination__arrow-prev_hidden');
      break;
    case max:
      arrowNext.classList.add('pagination__arrow-next_hidden');
      break;
    default:
      arrowPrev.classList.remove('pagination__arrow-prev_hidden');
      arrowNext.classList.remove('pagination__arrow-next_hidden');
  }
};

// Создать кнопку пагинации
const createPaginationCell = num => {
  const paginationItem = document.createElement('li');
  paginationItem.classList.add('pagination__page-item');

  const paginationLink = document.createElement('a');
  paginationLink.classList.add('pagination__page-button');
  paginationLink.textContent = `${num}`;

  const href = num === 1 ? 'blog.html' : `blog.html?page=${num}`;

  paginationLink.setAttribute('href', href);

  paginationItem.append(paginationLink);

  paginationItem.link = paginationLink;

  return paginationItem;
};

// Создать список страниц
const createPaginationList = (page, max) => {
  let btns;
  let range;

  switch (page) {
    case 1:
      {
        range = [1, 2, 3];
        btns = range.map(elem => createPaginationCell(elem));
      }
      break;
    case max:
      {
        range = [(max - 2), (max - 1), max];
        btns = range.map(elem => createPaginationCell(elem));
      }
      break;
    default:
    {
      range = [(page - 1), page, (page + 1)];
      btns = range.map(elem => createPaginationCell(elem));
    }
  }


  btns.forEach(el => {
    if (el.textContent === (page + '')) {
      el.link.classList.add('pagination__page-button_active');
    }
  });

  pagesList.append(...btns);
};

// Создать пагинацию
const renderPagination = (page, max) => {
  createPaginationList(page, max);

  const {firstPageArrow, lastPageArrow} = createArrows(max);
  paginationBlock.prepend(firstPageArrow);
  paginationBlock.append(lastPageArrow);

  checkPaginationArrows(firstPageArrow, lastPageArrow, page, max);
};

export {renderPagination};
