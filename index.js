import { stdin } from "process";
import authentication from "./authentication.js";
import actions from "./actions.js";
import { homedir } from "os";
import { commands } from "./commands.js";

export let currentDir = homedir();

const start = async () => {
  stdin.resume();
  authentication();
  const parseData = async (userInput) => {
    const inputArr = userInput.toString().trim().split(" ");
    const action = inputArr[0];
    const value = inputArr[1];
    const value2 = inputArr[2];
    // console.log("action-", action);
    // console.log("value-", value);
    // console.log("value2-", value2);
    if (commands.includes(action) && value && !value2) {
      //run function with one param
      const result = await actions[action](value);
      if (result) {
        currentDir = result;
      }
    } else if (commands.includes(action) && !value && !value2) {
      //run function without params
      const result = await actions[action]();
      if (result) {
        currentDir = result;
      }
    } else if (commands.includes(action) && value2) {
      //run function with two params
      const result = await actions[action](value, value2);
      if (result) {
        currentDir = result;
      }
    } else {
      console.log("Command not exist");
    }
    console.log(`You are currently ${currentDir}`);
    // const currentFilename = import.meta.url;
    // const currentDirname = path.dirname(currentFilename).replace("file://", "");
  };
  stdin.on("data", parseData);
};

start();
