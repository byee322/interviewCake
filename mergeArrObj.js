const a = [
  {uuid: 1, role: 'admin'},
  {uuid: 2, role: 'contributor'},
  {uuid: 3, role: 'owner'},
  {uuid: 4, role: 'contributor'}
]

const b = [
  {uuid: 2, name: 'Darling'},
  {uuid: 3, name: 'Cry-Baby'},
  {uuid: 4, name: 'Snitch'},
  {uuid: 5, name: 'Pawn'}
]

let aLength = 0
let bLength = 0
const ans = []
while(aLength < a.length || bLength < b.length){
  if(a[aLength]?.uuid === b[bLength]?.uuid){
    ans.push({...a[aLength], ...b[bLength]})
    bLength++
    aLength++
  }else if(bLength < aLength){
    ans.push({...b[bLength], role: null})
    bLength++
  }else{
    ans.push({...a[aLength], name: null})
    aLength++
  }
  debugger
}

console.log(ans)

//OUTPUT
//[
//  {uuid:1, name:  null,      role: 'admin'},
//  {uuid:2, name: 'Darling',  role: 'contributor'},
//  {uuid:3, name: 'Cry-Baby', role: 'owner'},
//  {uuid:4, name: 'Snitch',   role: 'contributor'},
//  {uuid:5, name: 'Pawn',     role: null}
//]
