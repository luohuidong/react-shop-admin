const hasCanceled = Symbol('hasCancel');
const wrappedPromise = Symbol('wrappedPromise');

class CancelablePromise {
  constructor (oldPromise) {
    this[hasCanceled] = false;
    this.promise = this[wrappedPromise](oldPromise);
  }
  cancel () {
    this[hasCanceled] = true;
  }
  [wrappedPromise](oldPromise) {
    const canceledRejectParam = {
      text: '已取消请求处理',
      cancel: this[hasCanceled]
    };

    return new Promise((resolve, reject) => {
      oldPromise.then(result => {
        return this[hasCanceled] ? reject(canceledRejectParam) : resolve(result);
      }).catch(error => {
        return this[hasCanceled] ? reject(canceledRejectParam) : reject(error);
      });
    });
  }
}

export {
  CancelablePromise,
};
