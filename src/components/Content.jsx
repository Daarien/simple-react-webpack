import React from "react";
import Counter from "./pages/Counter";
import Dogs from "./pages/Dogs";
import "../assets/style/pages.scss";

export default function Content({ page }) {
  switch (page) {
    case "counter":
      return <Counter />;
    case "dogs":
      return <Dogs />;
  }
}
