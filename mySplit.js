String.prototype.mySplit = function (separator) {
  const stringSep = String(separator);
  let temp = '';
  const stringThis = String(this);
  const result = [];
  if (stringSep === 'undefined' || stringSep === '[object Object]') {
    return [stringThis];
  } else if (stringSep.length === 0) {
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    };
    return result;
  } else if (stringSep.length > 0) {
    for (let i = 0; i < str.length; i++) {
      const el = str[i];
      if (el === stringSep || stringSep === '' && temp) {
        result.push(temp);
        temp = '';
      };
      if (el !== stringSep) {
        temp += el;
      }
    };
    if (temp) {
      result.push(temp);
      temp = '';
    };
    return result;
  }
};

const str = 'H1,2ell[]o, my ntrueundefinedame [1, 2] null i{}s .2..';
// console.log('empty', str.split());
// console.log('empty', str.mySplit());

// console.log('undefined', str.split(undefined));
// console.log('undefined', str.mySplit(undefined));

// console.log('{}', str.split({}));
// console.log('{}', str.mySplit({}));

// console.log('empty string', str.split(''));
// console.log('empty string', str.mySplit(''));

// console.log('space', str.split(' '));
// console.log('space', str.mySplit(' '));

// console.log('[]', str.split([]));
// console.log('[]', str.mySplit([]));

// console.log('null', str.split(null));
// console.log('null', str.mySplit(null));

// console.log('3', str.split(2));
// console.log('3', str.mySplit(2));

//
// console.log('1, 2', str.split(1, 2));
// console.log('1, 2', str.mySplit(1, 2));

// console.log('[1, 2]', str.split([1,2]));
// console.log('[1, 2]', str.mySplit([1,2]));

// console.log('true', str.split(true));
// console.log('true', str.mySplit(true));

// console.log('/\s/', str.split(/\s/));
