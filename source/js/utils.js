window.debounce = function (fn, { delay = 300, leading = false } = {}) {
  let timer;
  let hasCalledLeading = false;

  return (...args) => {
    if (leading && !hasCalledLeading) {
      fn(...args);
      hasCalledLeading = true;
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      hasCalledLeading = false;
      fn(...args);
    }, delay);
  };
};
