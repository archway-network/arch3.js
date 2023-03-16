import { createReadStream, writeFileSync } from 'fs';
import { createInterface } from 'readline';
import { resolve } from 'path';
import { readdir } from 'fs/promises';

main();

async function main() {
  const allProtoFiles = await getFilesRecursive('../../../proto');
  const imports = [];
  for (let i = 0; i < allProtoFiles.length; i++) {
    const stream = createReadStream(allProtoFiles[i].filePath);
    const lines = await createInterface({
      input: stream,
      crlfDelay: Infinity
    });

    for await (const line of lines) {
      if (line.startsWith('import ')) {
        const readLine = line.replace('import ', '');
        const cleanedLine = clean(readLine);
        if (!imports.includes(cleanedLine)) {
          imports.push(cleanedLine);
        }
      }
    }
  }
  const sortedImports = imports.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  let output = '';
  for (let l = 0; l < sortedImports.length; l++) {
    output += '- ' + sortedImports[l] + '\n';
  }

  writeFileSync('protoImports.txt', output);
}

function clean(item: string) {
  return item.replaceAll('"', '').replaceAll(';', '');
}

async function getFilesRecursive(
  dirPath: string
): Promise<{ filePath: string; fileName: string }[]> {
  const fsObjects = await readdir(dirPath, { withFileTypes: true });
  let filesOnly: { filePath: string; fileName: string }[] = [];

  for (let i = 0; i < fsObjects.length; i++) {
    const fsObj = fsObjects[i];
    const filePathWithFs = resolve(dirPath, fsObj.name);

    if (fsObj.isDirectory()) {
      filesOnly = [...filesOnly, ...(await getFilesRecursive(filePathWithFs))];
    } else if (fsObj.name.includes('.proto')) {
      filesOnly.push({ filePath: filePathWithFs, fileName: fsObj.name });
    }
  }

  return filesOnly;
}
