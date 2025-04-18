export const throttle = (func: () => void, wait: number) => {
  let timer = null;

  return function (...args) {
    if (timer) return;

    timer = setTimeout(() => {
      func(...args);

      timer = null;
    }, wait);
  };
};
