//Reverse letters of words in a given string

//INPUT: ehT kciuq nworb xof spmuj revo eht yzal god
//OUTPUT: The quick brown fox jumps over the lazy dog

function bar1(str){
  return str.split(" ").map((word)=>{
    const test = word.split("").reverse().join("");
    return test
  }).join(" ")
}

console.log(bar1("ehT kciuq nworb xof spmuj revo eht yzal god"));
