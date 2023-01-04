import React from "react";
import styles from "./Button.module.css";
import { BsSearch } from "react-icons/bs";

export default function Button() {
  return (
    <div>
      <button className={styles.btn}>
        <BsSearch className={styles.search} />
      </button>
    </div>
  );
}
