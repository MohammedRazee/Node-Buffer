# CSA4705 Lab: Buffers, Streams and JSON

Module 3, Backend Development with Node.js (MCA Semester III). This is the starter code for the 120-minute lab that follows the Buffer and Streams theory sessions. The lab sheet (PDF) from your instructor has the full task descriptions, expected output and written questions. This repository holds the code you will complete.

## What you need

- **Node.js 18 or higher.** Check with `node -v`.
- A terminal and a code editor (VS Code is fine).
- About 200 MB of free disk space for the optional Part 7.

There are no packages to install, so you do not need `npm install`.

## Quick start

```bash
git clone <your-repository-url>
cd <repository-folder>
npm run setup
npm run part1
```

`npm run setup` creates two folders: `data/` (the files your programs read) and `output/` (where your programs write their results). Run it once, **inside this folder**. The data is generated from a fixed seed, so everyone gets identical files and identical answers.

## ES6 modules only

All code in this lab uses `import` and `export`. Do **not** use `require()` or `module.exports`.

For this to work, `package.json` must contain this line, which is already included:

```json
"type": "module"
```

Do not remove it. Without it, Node 18 and 20 stop with `SyntaxError: Cannot use import statement outside a module`, and newer versions print a warning.

Two ES module rules to remember:

- Local imports need the file extension: `import { dataPath } from './paths.js';`
- There is no `__dirname`. The helper `paths.js` provides `dataPath()` and `outPath()` instead.

## The files

| File | What it is | Your job |
|---|---|---|
| `part1-buffer-basics.js` | Part 1: Buffer basics | complete the `TODO`s |
| `part2-buffer-predict.js` | Part 2: predict, then run | **do not edit**; predict first, then run |
| `part3-buffer-json.js` | Part 3: Buffers meet JSON | complete the `TODO`s |
| `part4-readable-stream.js` | Part 4: readable streams | complete the `TODO`s |
| `part5-writable-pipeline.js` | Part 5: writable streams, backpressure, `pipeline()` | complete the `TODO`s |
| `part6-transform-json.js` | Part 6: a Transform stream that processes JSON | complete the `TODO`s |
| `part7-memory.js` | Part 7 (stretch): `readFile` vs stream memory | complete the `TODO`s |
| `paths.js` | helper for file paths | already complete, do not edit |
| `line-splitter.js` | helper used in Part 6 | already complete, do not edit |
| `setup.js`, `clean.js` | create / remove the data files | already complete, do not edit |

## How to work through a part

1. Open the part's file and find the `TODO` comments.
2. Replace each `null` placeholder with your own code (or write the missing code where the comment says so).
3. Run it with the command below and compare your output with the **Expected output** in the lab sheet.
4. If your output is different, read the error message carefully before asking for help.

A file you have not finished yet still runs. It just prints `null` or `undefined` for the unfinished steps.

## Commands

| Command | What it runs |
|---|---|
| `npm run setup` | creates the `data/` and `output/` folders |
| `npm run part1` | Part 1: Buffer basics |
| `npm run part2` | Part 2: predict, then run |
| `npm run part3` | Part 3: Buffers meet JSON |
| `npm run part4` | Part 4: readable streams |
| `npm run part5` | Part 5: writable streams and `pipeline()` |
| `npm run part6` | Part 6: Transform stream (pass mark 75) |
| `npm run part7:make` | Part 7: create the 200 MB test file |
| `npm run part7:readfile` | Part 7: load it with `readFile` |
| `npm run part7:stream` | Part 7: read it with a stream |
| `npm run clean` | empty `output/` and delete the big test file |

**Part 6 takes options.** You can choose the pass mark and, optionally, a course:

```bash
node part6-transform-json.js 90          # only students with 90 marks or more
node part6-transform-json.js 80 MCA      # 80 or more AND course MCA
```

**Low on disk space for Part 7?** Make a smaller file:

```bash
SIZE_MB=100 npm run part7:make
```

Run `npm run clean` when you have finished Part 7.

## Troubleshooting

| What you see | Likely cause | Fix |
|---|---|---|
| `SyntaxError: Cannot use import statement outside a module` | `package.json` is missing the type line | add `"type": "module"` |
| `require is not defined in ES module scope` | CommonJS code in an ES module | use `import` instead |
| `ERR_MODULE_NOT_FOUND ... imported from ...` | import path has no file extension | write `'./paths.js'`, not `'./paths'` |
| `ENOENT: no such file ... students.ndjson` | setup not run, or wrong folder | run `npm run setup` inside this folder |
| Part 5 prints nothing and ends | you forgot `out.end()` | call `out.end()` when all lines are written |
| Part 6 prints nothing and ends | you forgot `callback()` in the Transform | call it once per line, even for skipped lines |
| `The "chunk" argument must be of type string ... Received an instance of Object` | you pushed an object | push `JSON.stringify(obj) + '\n'` |

## Rules

- ES6 `import`/`export` only, no CommonJS.
- Do not edit the files marked "already complete".
- Write your own solutions. The point of the lab is the practice, and the same ideas will appear in Lab Test 1.