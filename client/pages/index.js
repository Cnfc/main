import react from "react";

const LandingPage = () => {
  return <h2>Landing Page</h2>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // We are on the server
    // const res = await axios.get("http://ingress-nginx-controller.ingress-nginx.srv.cluster.local/api/users/currentuser");
  } else {
    // We are on the browser
    // const res = await axios.get("/api/users/currentuser");
  }

  console.log("I was Exex");

  return {};
};

export default LandingPage;
