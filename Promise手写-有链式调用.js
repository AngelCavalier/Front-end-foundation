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
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        try {
          const value = onFulfilled(this.value)
          resolve(value)
        } catch (err) {
          reject(err)
        }
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        try {
          const reason = onRejected(this.reason)
          resolve(reason)
        } catch (err) {
          reject(err)
        }
      }
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          try {
            const value = onFulfilled(this.value)
            resolve(value)
          } catch (err) {
            reject(err)
          }
        })
        this.onRejectedFns.push(() => {
          try {
            const reason = onRejected(this.reason)
            resolve(reason)
          } catch (err) {
            reject(err)
          }
        })
      }
    })
  }

  static all(promiseArr) {
    return new MyPromise((resolve, reject) => {
      // 问题关键: 什么时候要执行resolve, 什么时候要执行reject
      const values = []
      promiseArr.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if (values.length === promiseArr.length) {
            resolve(values)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("状态pedning");
  resolve(111)
  //reject(222)
  //throw new Error('executor err message')
})

promise.then(res => {
  console.log('res1:', res);
  return 'aaa'
  //throw new Error('err message')
}, err => {
  console.log('err1:', err);
  return 'bbb'
  //throw new Error('err message')
}).then(res => {
  console.log('res2:', res);
  return 'ccc'
}, err => {
  console.log('err2:', err);
  return 'ddd'
})

const p1 = new MyPromise((resolve) => {
  setTimeout(() => { resolve(111) }, 1000)
})
const p2 = new MyPromise((resolve) => {
  setTimeout(() => { resolve(222) }, 2000)
})
const p3 = new MyPromise((resolve) => {
  setTimeout(() => { resolve(333) }, 3000)
})

MyPromise.all([p1, p2, p3]).then(res => {
  console.log(res);
})
