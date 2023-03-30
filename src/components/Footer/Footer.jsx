import React from "react";
import Style from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={Style.footer}>
      <h2>Shopping Cart</h2>
      <p>
        &copy; <span>{year-1}</span> - All Rights Copyright Reserved To{" "}
        <a target="_blank" rel="noreferrer" href="http://www.samiurrahmanmukul.epizy.com">
          Manoj sharma
        </a>
      </p>
    </footer>
  );
}
