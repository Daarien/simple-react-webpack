import React, { useState } from "react";
import Context from "./Context";
import Layout from "./layout/Layout";
import Content from "./Content";

export default function App() {
  const [page, changePage] = useState("counter");
  return (
    <Context.Provider value={{ page, changePage }}>
      <Layout>
        <Content page={page} />
      </Layout>
    </Context.Provider>
  );
}
