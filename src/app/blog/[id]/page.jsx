import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>adfas</h1>
          <p className={styles.desc}>fef</p>
          <div className={styles.author}>
            <Image
              src="/illustration.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>dasdas</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/apps.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>dasds</p>
      </div>
    </div>
  );
};

export default BlogPost;
