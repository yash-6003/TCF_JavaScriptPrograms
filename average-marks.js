let marks = [78, 85, 90, 66, 88];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

let average = total / marks.length;

console.log("Average Marks:", average);

if (average >= 90) console.log("Grade: A+");
else if (average >= 75) console.log("Grade: A");
else if (average >= 60) console.log("Grade: B");
else console.log("Grade: C");
