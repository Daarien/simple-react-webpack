import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Container as={"main"}>{children}</Container>
      <Footer />
    </Fragment>
  );
}
