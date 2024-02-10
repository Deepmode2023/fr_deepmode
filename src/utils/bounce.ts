export const debounce = (func: Function, delay: number) => {
  let timerId: NodeJS.Timeout;

  return function (...args: Array<any>) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
