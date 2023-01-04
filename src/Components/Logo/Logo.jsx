import React from "react";
import { ImYoutube2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className={styles.logo} onClick={clickHandler}>
      <IoLogoYoutube className={styles.logoImg} />
      <ImYoutube2 className={styles.logoTxt} />
    </div>
  );
}
