import React from "react";
import styles from "./page.module.css";

const Category = ({ params }) => {
  return (
    <div className={styles.category}>
      <h1 className={styles.catTitle}>{params.category}</h1>
    </div>
  );
};

export default Category;
