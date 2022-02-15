import react, { useState } from "react";
import axios from "axios";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    const res = await axios.post("/api/users/signup", {
      email,
      password,
    });

    console.log(res.data);
  };
  const onChange = () => {};

  return (
    <div>
      <h1>SignUp Form</h1>
      <form onSubmit={handleSubmit}>
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
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default signup;
