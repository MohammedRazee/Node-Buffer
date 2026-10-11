// setup.js - creates the data files used in the lab. Already complete: do not edit.
// Run once with:  npm run setup
import { mkdirSync, writeFileSync } from 'node:fs';
import { dataPath, outPath } from './paths.js';

mkdirSync(dataPath(''), { recursive: true });
mkdirSync(outPath(''), { recursive: true });

// ---- 1. students.json : a small JSON array (12 records) ---------------------
const students = [
  { id: 1, name: 'Aarav', course: 'MCA', marks: 82 },
  { id: 2, name: 'Meera', course: 'MCA', marks: 67 },
  { id: 3, name: 'José', course: 'MBA', marks: 91 },
  { id: 4, name: 'Zoë', course: 'MCA', marks: 74 },
  { id: 5, name: 'Kiran', course: 'BCA', marks: 58 },
  { id: 6, name: 'Fatima', course: 'MCA', marks: 88 },
  { id: 7, name: 'Rohan', course: 'MBA', marks: 45 },
  { id: 8, name: 'Ananya', course: 'MCA', marks: 95 },
  { id: 9, name: 'Søren', course: 'BCA', marks: 76 },
  { id: 10, name: 'Priya', course: 'MCA', marks: 63 },
  { id: 11, name: 'Imran', course: 'MBA', marks: 79 },
  { id: 12, name: 'Lakshmi', course: 'MCA', marks: 71 },
];
writeFileSync(dataPath('students.json'), JSON.stringify(students, null, 2));

// ---- 2. students.ndjson : 20 000 records, ONE JSON object per line -----------
// (NDJSON = newline-delimited JSON, the usual format for streaming JSON.)
// A fixed seed makes every student's file identical, so everyone gets the same answers.
let seed = 42;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
const names = ['Aarav', 'Meera', 'José', 'Zoë', 'Kiran', 'Fatima', 'Rohan',
  'Ananya', 'Søren', 'Priya', 'Imran', 'Lakshmi'];
const courses = ['MCA', 'MBA', 'BCA'];

const lines = [];
for (let i = 1; i <= 20000; i++) {
  const student = {
    id: i,
    name: names[Math.floor(rand() * names.length)],
    course: courses[Math.floor(rand() * courses.length)],
    marks: 35 + Math.floor(rand() * 66), // 35..100
  };
  lines.push(JSON.stringify(student));
}
// One deliberately corrupted line (line 778) - Part 6 must survive it.
lines[777] = '{"id":778,"name":"Broken","course":"MCA","marks":';
writeFileSync(dataPath('students.ndjson'), lines.join('\n') + '\n');

// ---- 3. unicode.txt : text with multi-byte characters (for the chunk-split demo) --
writeFileSync(dataPath('unicode.txt'), 'héllo € wörld €\n'.repeat(3));

console.log('Setup complete. Files created in ./data and ./output');
