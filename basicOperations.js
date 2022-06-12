import {
  writeFile,
  readFile,
  unlink,
  rename as asyncRename,
  copyFile,
} from "fs/promises";
import { existsSync } from "fs";
import { currentDir } from "./index.js";

export const cat = async (path_to_file) => {
  // - Read file and print it's content in console:
  if (existsSync(`${currentDir}/${path_to_file}`)) {
    try {
      const content = await readFile(`${currentDir}/${path_to_file}`, {
        encoding: "utf-8",
      });
      console.log(content);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("file not exist");
  }
};
export const add = async (new_file_name) => {
  // - Create empty file in current working directory:
  try {
    await writeFile(`${currentDir}/${new_file_name}`, "", { flag: "wx" });
  } catch (err) {
    console.log("file already exist");
  }
};
export const rn = async (path_to_file, new_filename) => {
  // - Rename file:
  if (
    !existsSync(`${currentDir}/${path_to_file}`) ||
    existsSync(`${currentDir}/${new_filename}`)
  ) {
    console.log("file is exist or name busy");
  } else {
    try {
      await asyncRename(
        `${currentDir}/${path_to_file}`,
        `${currentDir}/${new_filename}`
      );
    } catch (error) {
      console.log("FS operation failed");
    }
  }
};
export const cp = async (path_to_file, path_to_new_directory) => {
  // - Copy file:
  if (
    !existsSync(`${currentDir}/${path_to_file}`) ||
    !existsSync(`${currentDir}/${path_to_new_directory}`)
  ) {
    console.log("file or new directory not exist");
    return null;
  } else {
    console.log(
      `${currentDir}/${path_to_file}`,
      `${currentDir}/${path_to_new_directory}`
    );
    try {
      await copyFile(
        `${currentDir}/${path_to_file}`,
        `${currentDir}/${path_to_new_directory}/${path_to_file}`
      );
      return "success";
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
export const rm = async (path_to_file) => {
  // - Delete file:
  if (existsSync(`${currentDir}/${path_to_file}`)) {
    try {
      unlink(`${currentDir}/${path_to_file}`);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("file not exist");
  }
};
export const mv = async (path_to_file, path_to_new_directory) => {
  // - Move file (same as copy but initial file is deleted):
  const result = await cp(path_to_file, path_to_new_directory);
  if (result === "success") {
    await rm(path_to_file);
  } else {
    console.log("move not complete");
  }
};
