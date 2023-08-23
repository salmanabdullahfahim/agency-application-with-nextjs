import React from "react";
import styles from "./page.module.css";
import Button from "src/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.category}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>sdasda</h1>
          <p className={styles.desc}>abd</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/illustration.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>sdasda</h1>
          <p className={styles.desc}>abd</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/apps.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
