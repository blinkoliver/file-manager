import { up, cd, ls } from "./navigation.js";
import { cat, add, rn, cp, mv, rm } from "./basicOperations.js";
import { os } from "./os.js";
const actions = {
  up: up,
  cd: cd,
  ls: ls,
  cat: cat,
  add: add,
  rn: rn,
  cp: cp,
  mv: mv,
  rm: rm,
  os: os,
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
