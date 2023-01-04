import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Input.module.css";

export default function Input() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const changeHandler = (e) => {
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    text && navigate("/videos", { state: text });
    setText("");
  };
  return (
    <>
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={text}
          name=""
          id=""
          onChange={changeHandler}
        />
        <Button />
      </form>
    </>
  );
}
