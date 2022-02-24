module.exports = function check(str, bracketsConfig) {
  if (str.length === 0) return true;
  if (str.length % 2 === 1) return false;


  const configObj = {}
  for (let arr of bracketsConfig) {
    configObj[(arr[0])] = (arr[1])
}
 
  let bracketsDeck = []

  for (let bracket of str) {
    let topDeck = bracketsDeck[bracketsDeck.length - 1];
    if (bracket === configObj[topDeck]) {
      bracketsDeck.pop();
    } else {
      bracketsDeck.push(bracket)
    }
  }

  return bracketsDeck.length === 0
}