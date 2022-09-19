const friends = ["Ish", "Sas", "Mak", "Mik", "Hez", "Duv"];
const Marks = [ 99.9998, 78.5464, 85.7236, 94.8492, 89.9582, 70.5273]; 
console.log(Marks[0].toFixed(2));
console.log(Marks[5].toExponential(0));
friends.pop();
Marks.pop();
console.log(friends);
console.log(Marks);
friends.splice( 1, 0, "Duv");
70.5273 = Marks[Marks.length];
Marks.sort();
console.log(Marks);
function Max_value(something) {
  return Math.max.apply(null, something);
}
console.log(Max_value(Marks));