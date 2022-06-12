import { existsSync } from "fs";
import { readdir } from "fs/promises";
import { currentDir } from "./index.js";

export const up = () => {
  const currentPathArr = currentDir.split("/");
  if (currentPathArr.length > 3) {
    const newPath = currentPathArr.slice(0, -1).join("/");
    return newPath;
  } else {
    console.log("You shouldn't change working directory");
    return null;
  }
};
export const cd = async (folder) => {
  const newPath = `${currentDir}/${folder}`;
  if (existsSync(newPath)) {
    return newPath;
  } else {
    console.log("folder not exist");
    return null;
  }
};
export const ls = async () => {
  if (existsSync(currentDir)) {
    try {
      const files = await readdir(currentDir);
      console.table(files.flat());
      return null;
    } catch (error) {
      throw error;
    }
  } else {
    console.log("path not exist");
    return null;
  }
};
