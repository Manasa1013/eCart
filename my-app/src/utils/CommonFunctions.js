export function getTrimmed(sentence, n) {
  let sentenceArr = sentence.split(" ");
  return sentenceArr.slice(0, n + 1).join(" ");
}
