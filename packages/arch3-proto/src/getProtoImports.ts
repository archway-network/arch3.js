import { createReadStream, writeFileSync, existsSync } from 'fs';
import { createInterface } from 'readline';
import { resolve } from 'path';
import { readdir } from 'fs/promises';

main();

async function main() {
    // get all proto files on root of proto folder
    const allProtoFiles = await getFilesRecursive("../../../proto");
    // read file and grab only lines starting with "import "
    const imports = [];
    for (let i = 0; i < allProtoFiles.length; i++) {
        const stream = createReadStream(allProtoFiles[i].filePath);
        const lines = await createInterface({
            input: stream,
            crlfDelay: Infinity
        });
        // insert only new entries
        for await (const line of lines) {
            if (line.startsWith("import ")) {
                console.log("line", line);
                const readLine = line.replace("import ", "");
                const cleanedLine = clean(readLine);
                if (!imports.includes(cleanedLine)) {
                    imports.push(cleanedLine);
                }
            }
        }
    }
    const sortedImports = imports.sort((a, b) => {
        if(a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    console.log("imports", sortedImports);
    let output = "";
    for (let l = 0; l < sortedImports.length; l++) {
        output += '- ' + sortedImports[l] + '\n';
    }
    // create new empty destination file to contain all proto import paths
    writeFileSync("protoImports.txt", output);
}

function clean(item: string) {
    return item
        .replaceAll('"', '')
        .replaceAll(';', '');
}

async function getFilesRecursive(dirPath: string): Promise<{ filePath: string, fileName: string }[]> {
    const fsObjects = (await readdir(dirPath, { withFileTypes: true }));
    let filesOnly: { filePath: string, fileName: string }[] = [];

    // use of for let is not an error do not use forEach for larger arrays
    for (let i = 0; i < fsObjects.length; i++) {
        const fsObj = fsObjects[i];
        let filePathWithFs = resolve(dirPath, fsObj.name);

        if (fsObj.isDirectory()) {
            // todo: need to optimize, spread is very slow
            filesOnly = [...filesOnly, ...(await getFilesRecursive(filePathWithFs))];
        } else if (fsObj.name.includes(".proto")) {
            filesOnly.push({ filePath: filePathWithFs, fileName: fsObj.name });
        }
    };

    return filesOnly;
}