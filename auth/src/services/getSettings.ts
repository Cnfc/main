import os from "os";

export const getSettings = () => {
  const arch = os.arch();
  const platform = os.platform();

  return {
    platform,
    arch,
  };
};
