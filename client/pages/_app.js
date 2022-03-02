import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser}></Header>
      <Component {...pageProps}></Component>;
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  console.log(Object.keys(appContext));

  // const client = buildClient(context);

  const { data } = await buildClient(appContext.ctx).get(
    "/api/users/currentuser"
  );

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  console.log(pageProps, "PagePROPS");

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
