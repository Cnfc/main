import { useEffect } from "react";
import Router from "next/router";
import useRequestHook from "../../hooks/useRequestHook";

const signout = () => {
  const { doRequest } = useRequestHook({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <div>
      <h1>Signing you out...</h1>
    </div>
  );
};

export default signout;
