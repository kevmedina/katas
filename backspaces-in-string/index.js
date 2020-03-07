// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// Solution 1
// function cleanString(str) {
//   var strArr = str.split("");
//   if (strArr === [] || strArr.indexOf("#") === -1) {
//     return strArr.join("");
//   } else {
//     for (var i = 0; i < strArr.length; i++) {
//       if (strArr[i] === "#") {
//         if (strArr[i - 1] === undefined) {
//           strArr.splice(i, 1);
//           return cleanString(strArr.join(""));
//         } else {
//           strArr.splice(i - 1, 2);
//           return cleanString(strArr.join(""));
//         }
//       }
//     }
//   }
// }

// Solution 2
function cleanString(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }

console.log(cleanString("abc#d##c"));
