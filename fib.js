class Fib{
  constructor(){
    this.memo = new Map()
  }

  fib(n){
    if(n == 0 || n == 1){
      return n
    }

    if(this.memo.has(n)){
      return this.memo.get(n)
    }

    let res = this.fib(n - 1) + this.fib(n - 2)

    this.memo.set(n, res)
    return res
  }
}

const fib = new Fib()
console.log("Fib:", fib.fib(1))
console.log("Fib:", fib.fib(2))
console.log("Fib:", fib.fib(3))
console.log("Fib:", fib.fib(4))
console.log("Fib:", fib.fib(5))
console.log("Fib:", fib.fib(6))
console.log("Fib:", fib.fib(7))
console.log("Fib:", fib.fib(8))

// const fib = n => {
//   if(n == 0 || n == 1){
//     return n
//   }

//   return fib(n - 1) + fib(n - 2)
// }

// console.log("fib:", fib(0))
// console.log("fib:", fib(1))
// console.log("fib:", fib(2))
// console.log("fib:", fib(3))
// console.log("fib:", fib(4))
// console.log("fib:", fib(5))
// console.log("fib:", fib(6))
// console.log("fib:", fib(7))
