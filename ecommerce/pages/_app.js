import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </AuthProvider>
  );
}

export default MyApp;
