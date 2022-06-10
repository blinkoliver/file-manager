import { stdin } from "process";
import authentication from "./authentication.js";
import actions from "./actions.js";
import path from "path";

const start = async () => {
  stdin.resume();
  authentication();
  const parseData = (userInput) => {
    const inputArr = userInput.toString().trim().split(" ");
    const action = inputArr[0];
    const currentFilename = import.meta.url;
    // const currentDirname = path.dirname(currentFilename);
    const currentDirname = "/Users/user/Desktop/rs/file-manager";
    actions[action](currentDirname) || actions["default"];
  };
  stdin.on("data", parseData);
};

start();
