import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import Context from "../Context";
import classnames from "classnames";

const routes = [
  { route: "counter", title: "Counter" },
  { route: "count-buttons", title: "Count buttons" },
  { route: "dogs", title: "Sobaken" },
  { route: "database", title: "Book database" }
];

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
          {routes.map(item => (
            <span
              key={item.route}
              data-page={item.route}
              className={classnames({ active: page === item.route })}
              onClick={handleChangePage}
            >
              {item.title}
            </span>
          ))}
        </nav>
      </Container>
      <hr />
    </header>
  );
}
