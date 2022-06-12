import { up, cd, ls } from "./navigation.js";
import { cat, add, rn, cp, mv, rm } from "./basicOperations.js";
import { os } from "./os.js";
import { hash } from "./hash.js";
import { compress, decompress } from "./zip.js";

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
  hash: hash,
  compress: compress,
  decompress: decompress,
};
export default actions;
