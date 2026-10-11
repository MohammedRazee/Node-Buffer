// Part 2 - Predict, then run
// Run with:  npm run part2
//
// STEP 1: Do NOT run this file yet. Read every item and write your PREDICTION
//         in the table in your lab sheet.
// STEP 2: Run the file and compare. For every item you got wrong, write one sentence
//         explaining why the real answer is different.
// Nothing needs to be edited in this file.

// 2.A Values outside 0-255
const a = Buffer.from([300, -1, 256]);
console.log('2.A', a);

// 2.B subarray() and copies
const original = Buffer.from('abcdef');
const view = original.subarray(0, 3);
view[0] = 90; // 90 is 'Z'
console.log('2.B original after changing the view:', original.toString());

const copy = Buffer.from(original.subarray(0, 3));
copy[0] = 88; // 88 is 'X'
console.log('2.B original after changing the copy:', original.toString());

// 2.C Adding Buffers with +
const joined = Buffer.from('foo') + Buffer.from('bar');
console.log('2.C typeof (a + b):', typeof joined, '->', joined);
console.log('2.C Buffer.concat :', Buffer.concat([Buffer.from('foo'), Buffer.from('bar')]));

// 2.D Comparing Buffers
const x = Buffer.from('hi');
const y = Buffer.from('hi');
console.log('2.D x === y     :', x === y);
console.log('2.D x.equals(y) :', x.equals(y));

// 2.E Writing into a Buffer that is too small
const small = Buffer.alloc(4);
const written = small.write('héllo');
console.log('2.E bytes written:', written, '->', JSON.stringify(small.toString()));
