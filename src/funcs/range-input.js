for (let e of document.querySelectorAll('input[type="range"]._slider_14w1e_23')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

// find script in index.html file

/*
Attach a ref to the element

Create a custom hook that uses the useRef hook to reference the element
*/