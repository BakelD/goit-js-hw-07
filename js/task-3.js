const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', e => {
  refs.span.textContent = e.target.value.trim() || 'Anonymous';
});
