const findMovies = (flightLength, movieLengths) => {
  const movieLengthsSet = new Set()

  for(let movieLength of movieLengths){
    let difference = flightLength - movieLength;
    if(movieLengthsSet.has(difference)){
      return true
    }

    movieLengthsSet.add(movieLength)
  }
  return false
}

console.log(findMovies(120, [80,190,29,39,21]))

/// time: o(n)
/// space: o(n)
