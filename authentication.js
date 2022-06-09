import { argv } from "process";
import { homedir } from "os";

const authentication = () => {
  const userInputArgv = argv.slice(3);
  const user = userInputArgv[0].replace("--username=", "");
  console.log(`Welcome to the File Manager, ${user}!`);
  console.log(`You are currently in ${homedir}`);
  const exitHandler = (options, exitCode) => {
    if (options.exit || options.cleanup) {
      console.log(`\nThank you for using File Manager, ${user}!`);
    }
  };
  process.on("exit", exitHandler.bind(null, { cleanup: true }));
  process.on("SIGINT", exitHandler.bind(null, { exit: true }));
  process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
};
export default authentication;
