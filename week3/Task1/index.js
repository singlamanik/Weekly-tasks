let s = "Let's experiment on this string.";
console.log(s);
let tag_line = s.slice(6, 16);
console.log(tag_line);
let same_tag = s.substr(6,10);
console.log(same_tag);
let almost_final_words = s.replace(/LET's/i, "Done")
console.log(almost_final_words);
let addition = "    Yeah!, "
let final_words = s.concat(addition, almost_final_words);
console.log(final_words);
let tidy = final_words.trimStart();
console.log(tidy);
let convert_to_uppercase = final_words.toUpperCase();
console.log(convert_to_uppercase);
let convert_to_Lowercase = final_words.toLowerCase();
console.log(convert_to_Lowercase);






