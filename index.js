import { stdin } from "process";
import authentication from "./authentication.js";

const start = async () => {
  stdin.resume();
  authentication();
};

start();
