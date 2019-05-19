function palindrome(str) {
  const sentence = str.replace(/[\W_]/g, "").toLowerCase();
  const reversedSentence = sentence
    .split("")
    .reverse()
    .join("");
  if (reversedSentence === sentence) {
    return true;
  }
  return false;
}

console.log(palindrome("eye"));
