import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
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
            <span className={styles.username}>fa</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/apps.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.title}</p>
      </div>
    </div>
  );
};

export default BlogPost;
