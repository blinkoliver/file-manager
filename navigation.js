import { existsSync } from "fs";
import { readdir } from "fs/promises";

export const up = () => {
  console.log("up");
};
export const cd = (path) => {
  console.log(path);
};
export const ls = async (path) => {
  console.log(path);
  if (!path) return;
  if (existsSync(path)) {
    console.log(path);
    try {
      const files = await readdir(path);
      console.log(files);
      console.log(files.flat());
    } catch (error) {
      throw error;
    }
  } else {
    throw new Error("FS operation failed");
  }
};
