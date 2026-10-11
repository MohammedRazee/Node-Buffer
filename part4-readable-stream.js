// Part 4 - Readable streams
// Run with:  npm run part4
// Complete each TODO. The functions run one after another, so read the output in order.
import { createReadStream } from 'node:fs';
import { dataPath } from './paths.js';

// 4.1 + 4.2  Read data/students.ndjson in 64 KB chunks.
//   - count the chunks
//   - add up the bytes (chunk.length)
//   - print whether the FIRST chunk is a Buffer, and its size
//   - 4.2: count the lines by counting the byte 0x0a (a newline) in every chunk.
//          Do NOT convert the chunk to a string. Loop over the bytes instead.
function countChunks(done) {
  const stream = createReadStream(dataPath('students.ndjson'), {
    highWaterMark: 64 * 1024, // chunk size in bytes
  });

  let chunks = 0;
  let totalBytes = 0;
  let lines = 0;

  // TODO: stream.on('data', (chunk) => { ... })

  // TODO: stream.on('end', () => { print the three totals, then call done() })

  // TODO: stream.on('error', (err) => { ... })

  // (remove the next line once you have written the 'end' handler above)
  done();
  console.log('4.1/4.2 totals so far:', { chunks, totalBytes, lines });
}

// 4.3 A multi-byte character can be cut in half between two chunks.
//   Part 1: read data/unicode.txt with highWaterMark 4 and build a string with  text += chunk
//           Print it with JSON.stringify(text).  What do you notice?
//   Part 2: do it again, but call stream.setEncoding('utf8') before reading.
//           Print the result. What changed, and why?
function unicodeDemo(done) {
  // TODO: Part 1
  // TODO: Part 2 (start it inside the 'end' handler of Part 1, then call done())
  done();
}

// 4.4 Errors arrive as an 'error' event.
//   Open data/does-not-exist.txt, add an 'error' handler and print err.code
function missingFile() {
  // TODO
}

countChunks(() => unicodeDemo(missingFile));
