export function isValidTextLength(text) {
  let lengthInput = text.length;
  if(lengthInput < 6 || lengthInput > 10) return false;
  return true;
}

export function isValidTextByRegex(text, strRegex) {
  if(!strRegex.test(text)) return false;
  return true;
}