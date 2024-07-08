const debounce = <F extends (...args: any[]) => void>(func: F, delay: number = 500) => {
  let timer: NodeJS.Timeout;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const context = this as ThisParameterType<F>;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null!;
      func.apply(context, args);
    }, delay);
  };
};

export default debounce;
