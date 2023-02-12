import { isFunction, isPlainObject } from 'lodash';

export default function setRef(...refArr) {
  return (...args) => {
    const [el] = args;

    refArr.forEach((ref) => {
      if (isFunction(ref)) {
        ref(...args);
      } else if (isPlainObject(ref)) {
        ref.current = el;
      }
    });
  };
}
