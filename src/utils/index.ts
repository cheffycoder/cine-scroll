type obj = Record<string, any>;

const isArray = (target: string[]) =>
  Object.prototype.toString.call(target) === "[object Array]";

const isObject = (target: obj) => typeof target === "object" && target;

const bemClass = (input: any = []) => {
  let [blk, elt, mods, className] = input;
  const result: string[] = [];
  if (isArray(elt) || isObject(elt)) {
    className = mods;
    mods = elt;
    elt = "";
  }

  const eltClass = elt ? `${blk}__${elt}` : blk;
  result.push(eltClass);

  if (isArray(mods)) {
    mods.forEach((mod: any) => {
      const classStr = elt ? `${blk}__${elt}--${mod}` : `${blk}--${mod}`;
      result.push(classStr);
    });
  }

  if (isObject(mods) && !isArray(mods)) {
    const modObjKeys = Object.keys(mods);
    modObjKeys.forEach((key) => {
      if (mods[key]) {
        const classStr = elt ? `${blk}__${elt}--${key}` : `${blk}--${key}`;
        result.push(classStr);
      }
    });
  }

  if (className) {
    result.push(className);
  }

  return result.join(" ");
};

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export { debounce, bemClass, isArray, isObject };
