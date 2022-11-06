
function findRotation(arr){
  const firstWord = arr[0];

  let floorIndex = 0,
      ceilingIndex = arr.length - 1;

  while(floorIndex < ceilingIndex){
    const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));
    if(arr[guessIndex] >= firstWord){
      floorIndex = guessIndex
    }else{
      ceilingIndex = guessIndex
    }

    if(floorIndex + 1 === ceilingIndex){
      break;
    }
  }

  return ceilingIndex
}

const words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];
console.log("findRotation:", findRotation(words) )
