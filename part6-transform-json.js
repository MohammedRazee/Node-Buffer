// Part 6 - A Transform stream that processes JSON
// Run with:  npm run part6                       (default pass mark: 75)
//            node part6-transform-json.js 90          (only students with 90+)
//            node part6-transform-json.js 80 MCA      (80+ AND course MCA)
import { createReadStream, createWriteStream, readFileSync, writeFileSync } from 'node:fs';
import { pipeline, Transform } from 'node:stream';
import { dataPath, outPath } from './paths.js';
import { LineSplitter } from './line-splitter.js'; // provided: gives you ONE STRING PER LINE

const minMarks = Number(process.argv[2] ?? 75);
const course = process.argv[3]; // optional, e.g. 'MCA'

// 6.1 Counters we will report at the end (already done)
const stats = { read: 0, kept: 0, bad: 0 };

// 6.2 Write the Transform. It receives ONE LINE of text and must:
//   1. stats.read++
//   2. JSON.parse the line inside try/catch. If it throws: stats.bad++, call callback(), return
//   3. keep the student only if marks >= minMarks (and course matches, if a course was given)
//   4. if kept: stats.kept++ and  this.push(JSON.stringify({ id, name, marks }) + '\n')
//   5. always call callback() when you are done with the line
const filterStudents = new Transform({
  writableObjectMode: true, // input side receives whole lines (strings)
  transform(line, encoding, callback) {
    // TODO
    callback();
  },
});

// 6.3 Connect the stages with pipeline():
//   read data/students.ndjson -> new LineSplitter() -> filterStudents -> write output/toppers.ndjson
//   In the callback: if err, print it. Otherwise print the three counters, then call summarise().
// TODO
// (remove the next line when your pipeline is ready)
summarise();

// 6.4 Read output/toppers.ndjson back, parse every line, and build a summary object with:
//     minMarks, course ('all' if none), linesRead, corruptedLines, kept, averageMarks (2 decimals),
//     highest: { name, marks }.
//     Save it with JSON.stringify(summary, null, 2) to output/summary.json,
//     then read it back and print it.
function summarise() {
  // TODO
}
