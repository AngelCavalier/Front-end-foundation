// 三个状态
const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []  // 成功存放数组
    this.onRejectedFns = []   // 失败存放数组

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        this.onFulfilledFns.forEach(fn => {
          fn(this.value)
        })
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        this.onRejectedFns.forEach(fn => {
          fn(this.reason)
        })
      }
    }
    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // 1. 如果在then调用的时候，状态已经确定
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    }
    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }
    // 2. 如果在then调用的时候，状态不确定（异步操作），将成功和失败的回调放到数组中
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled)  // onFulfilled传入成功数组
      this.onRejectedFns.push(onRejected)    // onRejected传入失败数组
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("状态pedning");
  setTimeout(() => {
    resolve(111)
    // reject('222')
  }, 1000)
  // resolve(111)
  // reject(222)
})

promise.then((res) => {
  console.log('res:', res);
}, (err) => {
  console.log('err:', err);
})