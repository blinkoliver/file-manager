import { stdin } from "process";
import authentication from "./authentication.js";

const start = async () => {
  stdin.resume();
  const myCallback = (userInput) => {
    const input = userInput.toString().trim();
    console.log(input);
  };
  stdin.on("data", myCallback);
  authentication();
};

start();
