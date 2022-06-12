import { readFile } from "fs/promises";
import { currentDir } from "./index.js";

const { createHash } = await import("crypto");

export const hash = async (path_to_file) => {
  //   - Calculate hash for file and print it into console
  try {
    const file = await readFile(`${currentDir}/${path_to_file}`);
    const hashSum = createHash("sha256");
    hashSum.update(file);
    console.log(hashSum.digest("hex"));
  } catch (error) {
    console.log("file not read");
  }
};
