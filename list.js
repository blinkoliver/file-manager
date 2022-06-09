import { existsSync } from "fs";
import { readdir } from "fs/promises";

export const list = async (path) => {
  if (existsSync(path)) {
    try {
      const files = await readdir(path);
      return files;
    } catch (error) {
      throw error;
    }
  } else {
    throw new Error("FS operation failed");
  }
};
list();
