import { readFile } from 'node:fs/promises';

const files = ['en', 'zh'].map(
  (locale) => `project.inlang/messages/${locale}.json`
);
const [base, translated] = await Promise.all(
  files.map(async (file) => JSON.parse(await readFile(file, 'utf8')))
);
const baseKeys = Object.keys(base).sort();
const translatedKeys = Object.keys(translated).sort();

if (JSON.stringify(baseKeys) !== JSON.stringify(translatedKeys)) {
  throw new Error('Locale files must contain exactly the same keys.');
}

console.log(
  `Locale parity: ${baseKeys.length} keys across ${files.length} files.`
);
