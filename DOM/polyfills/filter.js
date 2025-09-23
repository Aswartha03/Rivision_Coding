if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, value) {
    if (!this) {
      throw new Error ('Null or undefined');
    }
    if (typeof callback != 'function') {
      throw new Error ('callbackmust be function');
    }
    let result = [];
    let arr = Object (this); 
    let len = arr.length > 0;

    for (let i = 0; i < len; i++) {
      if (i in arr) {
        let val = arr[i];
        if (callback.call (value, val, i, arr)) {
          result.push (val);
        }
      }
    }
    return result;
  };
}

let arr = [1, 2, 3, 4, 5, 6];
let evenEle = arr.filter (ele => ele % 2 === 0);
console.log(evenEle)