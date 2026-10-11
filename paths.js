// paths.js - small helper module (ES6). Already complete: do not edit.
//
// ES modules do NOT have __dirname or __filename (those exist only in CommonJS).
// We rebuild them from import.meta.url so the scripts work from any folder.
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// dataPath('students.json')  ->  <this folder>/data/students.json
export const dataPath = (name) => join(__dirname, 'data', name);

// outPath('copy.ndjson')     ->  <this folder>/output/copy.ndjson
export const outPath = (name) => join(__dirname, 'output', name);
