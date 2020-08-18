export const elements = {
  searchForm: document.querySelector('.search') as HTMLFormElement,
  searchInput: document.querySelector('.search__field') as HTMLInputElement,
  searchRes: document.querySelector('.results') as HTMLDivElement,
  searchResList: document.querySelector('.results__list') as HTMLUListElement
}


export const renderLoader = (parent: HTMLDivElement):void  => {
  const loader = `
      <div class='loader'>
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;

  parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = (): void => {
  const loader = document.querySelector('.loader') as HTMLDivElement;
  if (loader) loader.parentElement?.removeChild(loader)
}
