import os from "os";

export const getSettings = () => {
  const hostname = os.hostname();
  const arch = os.arch();
  const cpus = os.cpus();
  const freemem = os.freemem();
  const homedir = os.homedir();
  const networkInterfaces = os.networkInterfaces();
  const platform = os.platform();
  const release = os.release();
  const userInfo = os.userInfo();
  const version = os.version();

  // console.log(hostname);
  // console.log(arch);
  // console.log(cpus);
  // console.log(freemem);
  // console.log(homedir);
  // console.log(networkInterfaces);
  // console.log(release);
  // console.log(userInfo);
  // console.log(version);
  return {
    platform,
    arch,
  };
};
