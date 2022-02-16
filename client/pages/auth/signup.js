import { useState } from "react";
import Router from "next/router";
import useRequestHook from "../../hooks/useRequestHook";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequestHook({
    url: "/api/users/signup",
    method: "post",
    body: { email, password },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <div>
      <h1>SignUp Form</h1>
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

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default signup;
