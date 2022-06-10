import { up, cd, ls } from "./navigation.js";
const actions = {
  up: up,
  cd: cd,
  ls: ls,
  cat: () => {
    return "read and print function";
  },
  add: () => {
    return "add new file function";
  },
  rn: () => {
    return "rename function";
  },
  copy: () => {
    return "copy function";
  },
  mv: () => {
    return "mv function";
  },
  rm: () => {
    return "rm function";
  },
  os: () => {
    return "os function";
  },
  hash: () => {
    return "create hash function";
  },
  compress: () => {
    return "compress function";
  },
  decompress: () => {
    return "decompress function";
  },
  default: () => {
    throw new Error("error from actions");
  },
};
export default actions;
