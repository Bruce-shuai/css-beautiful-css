// #02 的一道题  我看看我的解题方法写上去没有


// 第三题
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// const promise2 = promise1.then(() => {
//   throw new Error('error!!!')
// })

// console.log('promise1', promise1)
// console.log('promise2', promise2)

// setTimeout(() => {
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
// }, 2000)

// promise1 
// promise2 
// promise2 报错
// promise1
// promise2 报错


// 第四题
// setTimeout(()=> console.log(5), 0);
// new Promise(resolve => {
//     console.log(1);
//     resolve(3);
//     Promise.resolve().then(()=> console.log(4))
// }).then(num => {
//     console.log(num)
// });
// console.log(2);

// 1  2 4  3   5    // then 通过上下顺序来执行

// const promise = new Promise((resolve, reject) => {
//   resolve('success1')  //  执行到这儿后，就不会再往下执行了
//   reject('error')
//   resolve('success2')
// })

// promise
//   .then((res) => {
//     console.log('then: ', res)
//   })
//   .catch((err) => {
//     console.log('catch: ', err)
//   })

// then: success1


// 这个有点奇怪啊~
// Promise.resolve()
//   .then(() => {
//     return new Error('error!!!')
//   })
//   .then((res) => {
//     console.log('xxxthen: ', res)
//   })
//   .catch((err) => {
//     console.log('catch: ', err)
//   })
