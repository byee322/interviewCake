const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

const reverseWords = (arr) => {
  let ans = []
  let wordEndIndex = arr.length;
  let wordStartIndex = arr.length;
  for(let i =arr.length - 1; i >= 0; i--){
    if(arr[i] == " " || i == 0){
      if(i == 0) wordStartIndex--

      let word = arr.slice(wordStartIndex, wordEndIndex)
      ans = [...ans, ...word]

      if(i !== 0) ans.push(" ")

      wordStartIndex --
      wordEndIndex = wordStartIndex

    }else if(arr[i] !== " "){
      wordStartIndex --
    }
  }

  return ans
}

console.log(reverseWords(message).join(''))

// time complexity: o(n)
// space complexity: o(n)
