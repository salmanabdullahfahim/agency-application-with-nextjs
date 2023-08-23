import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import styles from "./loading.module.css";

const loading = () => {
  return (
    <div className={styles.container}>
      <ClimbingBoxLoader color="#194c33" />
    </div>
  );
};

export default loading;
