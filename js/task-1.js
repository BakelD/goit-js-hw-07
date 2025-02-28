const refs = {
  categoriesList: document.querySelector('#categories'),
  listItems: document.querySelectorAll('.item'),
};

// 1
console.log('Number of categories:', refs.categoriesList.children.length);

// 2
refs.listItems.forEach(item => {
  const titleEl = item.firstElementChild;
  console.log('Category:', titleEl.textContent);

  const innerListEl = item.lastElementChild;
  console.log('Elements:', innerListEl.children.length);
});
