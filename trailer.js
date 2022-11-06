// class Trailer {
//   constructor(weight){
//     this.weight = weight||[]
//   }

//   load(weight){
//     this.weight.push(weight)
//   }

//   unload(weight){
//     if(weight){
//       for(let [index, w] of this.weight.entries()){
//         if(w == weight){
//           this.weight.splice(index,1)
//         }
//       }
//     }else {
//       this.weight.unshift()
//     }
//   }
// }

class Trailer {
  constructor(weight){
    this.weight = weight||new Map()
  }

  load(weight, date){
    this.weight.set(date, weight)
  }

  unload(date){
    for(let [d, w] of this.weight.entries()){
      let day = new Date(d)
      if(date.getDay() == day.getDay() && date.getMonth() == day.getMonth()){
        this.weight.delete(d);
      }
    }
  }
}

let today = new Date()
let todayCopy = new Date()
let todayCopy2 = new Date()
let tomorrow = new Date(todayCopy.setDate(today.getDate() + 1))
let twoDays = new Date(todayCopy2.setDate(today.getDate() + 2))

let weights = new Map().set(today.toString(), 123)
.set(tomorrow.toString(), 222)
const trailer1 = new Trailer(weights)
trailer1.load(993, twoDays)
debugger
trailer1.unload(new Date())
