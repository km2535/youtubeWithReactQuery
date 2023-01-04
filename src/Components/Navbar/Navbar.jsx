import React from "react";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Input />
    </div>
  );
}
