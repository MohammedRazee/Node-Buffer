// Part 3 - Buffers meet JSON
// Run with:  npm run part3
// Replace every  null  with your own code.
import { readFileSync } from 'node:fs';
import { dataPath } from './paths.js';

// 3.1 Read data/students.json WITHOUT giving an encoding. What do you get back?
//     Print whether it is a Buffer (Buffer.isBuffer) and how many bytes it has.
//     Then print its first byte, and the character that byte represents
//     (hint: String.fromCharCode).
const raw = null; // TODO: readFileSync(dataPath('students.json'))
console.log('3.1 is a Buffer?  :', raw && Buffer.isBuffer(raw), '| bytes:', raw?.length);
console.log('3.1 first byte    :', raw?.[0], '=', raw && String.fromCharCode(raw[0]));

// 3.2 Turn the bytes into text, then the text into a JavaScript array.
//     (two steps: raw.toString('utf8') and then JSON.parse)
const jsonText = null; // TODO
const students = null; // TODO
console.log('3.2 records       :', students?.length);
console.log('3.2 first student :', students?.[0]);

// 3.3 Characters vs bytes: why is the byte count bigger than the character count?
console.log('3.3 characters    :', jsonText?.length);
console.log('3.3 bytes         :', raw?.length);
// TODO (in your lab sheet): which three students' names cause the difference?

// 3.4 Keep only students with marks >= 80, then convert back to JSON text twice:
//     once compact, once pretty-printed with 2 spaces (JSON.stringify(value, null, 2)).
//     Report the size in BYTES of each (hint: Buffer.byteLength).
const toppers = null; // TODO: students.filter(...)
const compact = null; // TODO
const pretty = null; // TODO
console.log('3.4 toppers (>=80):', toppers?.map((s) => s.name).join(', '));
console.log('3.4 compact bytes :', compact && Buffer.byteLength(compact));
console.log('3.4 pretty bytes  :', pretty && Buffer.byteLength(pretty));

// 3.5 Hide a JSON object inside base64 text (this is how JWT tokens are built).
//     1. JSON.stringify the payload   2. Buffer.from(...)   3. .toString('base64')
//     Then reverse it: base64 -> Buffer -> text -> JSON.parse
const payload = { id: students?.[0].id, name: students?.[0].name, role: 'student' };
const token = null; // TODO
console.log('3.5 token         :', token);
const back = null; // TODO: decode the token back into an object
console.log('3.5 decoded       :', back);

// 3.6 Mystery token. Decode it and read the message.
const mystery = 'eyJtZXNzYWdlIjoiQnVmZmVycyBhcmUgYnl0ZXMiLCJtYXJrcyI6MTAwfQ==';
const secret = null; // TODO
console.log('3.6 mystery       :', secret);

// 3.7 HTTP Basic Auth: the header is 'Basic ' + base64('user:password').
//     Build the header for user 'prof' and password 'secret123'.
//     Then decode it again to prove that base64 is NOT encryption.
const header = null; // TODO
console.log('3.7 header        :', header);
const decodedLogin = null; // TODO: the original 'user:password' text
console.log('3.7 anyone can read it ->', decodedLogin);
