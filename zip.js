import { createBrotliCompress, createBrotliDecompress } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { promisify } from "util";
import { currentDir } from "./index.js";
const pipe = promisify(pipeline);

export const compress = async (path_to_file, path_to_destination) => {
  // - Compress file (using Brotli algorytm)
  try {
    const brCompress = createBrotliCompress();
    const source = createReadStream(`${currentDir}/${path_to_file}`);
    const destination = createWriteStream(
      `${currentDir}/${path_to_destination}.gz`
    );
    await pipe(source, brCompress, destination);
  } catch (error) {
    console.log("filed compress");
  }
};
export const decompress = async (path_to_file, path_to_destination) => {
  // - Decompress file (using Brotli algorytm)
  try {
    const brDecompress = createBrotliDecompress();
    const source = createReadStream(`${currentDir}/${path_to_file}`);
    const destination = createWriteStream(
      `${currentDir}/${path_to_destination}`
    );
    await pipe(source, brDecompress, destination);
  } catch (error) {
    console.log("filed decompress");
  }
};
