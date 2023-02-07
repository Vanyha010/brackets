module.exports = function check(str, bracketsConfig) {
  let objPairs = {};
  let openBrackets = [];
  for (let item of bracketsConfig) {
    objPairs[item[0]] = item[1];
    openBrackets.push(item[0]);
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (objPairs[stack[stack.length - 1]] == str[i]) {
      stack.pop()
    } else if (openBrackets.includes(str[i])) {
      stack.push(str[i])
    } else {
      return false
    }
  }
  return (stack.length == 0)
}
