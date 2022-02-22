import { useState } from "react";
import Router from "next/router";
import useRequestHook from "../../hooks/useRequestHook";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequestHook({
    url: "/api/users/signup",
    method: "post",
    body: { email, password },

    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await doRequest();
  };

  return (
    <div>
      <h1>SignIn Form</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="email"
          ></input>
        </div>

        <div className="form-group">
          <label className="">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="password"
          ></input>
        </div>

        {errors}

        <button className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
};

export default signin;
