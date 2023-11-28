//dado uma string retornar a quantidade de cada string repetida
// ex: aabbbcct -> a2b3c2t1

// first solution
// function totalStr(str) {
//   let mapStr = new Map();
//   const auxStrArr = [];

//   // cria um array com cada char nao repetido
//   for (let a = 0; a < str.length; a++) {
//     if (!auxStrArr.includes(str[a])) {
//       auxStrArr.push(str[a]);
//       mapStr.set(str[a], 0);
//     }
//   }

//   for (let a = 0; a < str.length; a++) {
//     if (auxStrArr.includes(str[a])) {
//       let itemValue = mapStr.get(str[a]);
//       mapStr.set(str[a], (itemValue += 1));
//     }
//   }

//   let resultStr = "";
//   for (const value of mapStr.entries()) {
//     resultStr += `${value[0]}${value[1]}`;
//   }

//   return resultStr;
// }

function totalStr(str) {
  const chars = {};
  let result = "";
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  for (let [arr, value] of Object.entries(chars)) {
    result += arr + value;
  }
}

module.exports = { totalStr };
