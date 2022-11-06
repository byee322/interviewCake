const convertMarkdown = (text) => {
  let words = text.split(" ")
  let notClosed = ""
  for( let [i, word] of words.entries()){
    if(word.includes("\n")){
      words[i] = notClosed + word
      notClosed = ""
    }else if(word.includes("###")){
      words[i] = words[i].replace("#","<h3>")
      notClosed = "</h3>"
    }else if(word.includes("##")){
      words[i] = words[i].replace("#","<h2>")
      notClosed = "</h2>"
    }else if(word.includes("#")){
      words[i] = words[i].replace("#","<h1>")
      notClosed = "</h1>"
    }
  }

  if(notClosed !== ""){
    words.push(notClosed)
  }

  return words.join(" ")
}

const test = "#Heading level 1 \n ## Heading Level 2";
console.log(convertMarkdown(test))


// #{2}(?[^#]))
