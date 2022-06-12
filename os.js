import { EOL, homedir, hostname, arch, cpus } from "os";
export const os = (flag) => {
  const flags = {
    "--EOL": EOL,
    "--CPUS": cpus(),
    "--homedir": homedir(),
    "--username": hostname(),
    "--architecture": arch(),
  };
  console.log(
    flags[flag] ||
      "flag not exist, use os with flags [ --EOL, --CPUS, --homedir, --username, --architecture]"
  );
};
