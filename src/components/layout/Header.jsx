import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import Context from "../Context";
import classnames from "classnames";

export default function Header() {
  const context = useContext(Context);
  const { page, changePage } = context;
  function handleChangePage(event) {
    event.stopPropagation();
    const page = event.target.dataset.page;
    changePage(page);
  }
  return (
    <header>
      <Container>
        <img src={logo} alt="Logo image" />
        <h1>React project</h1>
        <nav>
          <span
            data-page="counter"
            className={classnames({ active: page === "counter" })}
            onClick={handleChangePage}
          >
            Counter
          </span>
          <span
            data-page="dogs"
            className={classnames({ active: page === "dogs" })}
            onClick={handleChangePage}
          >
            Dogs
          </span>
        </nav>
      </Container>
      <hr />
    </header>
  );
}
