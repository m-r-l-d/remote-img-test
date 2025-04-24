import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  async function ScreenshotImage() {
    return (
      <div>
        <Image
          src={
            "https://mrld-remote-img-test.s3.us-east-2.amazonaws.com/tools.png"
          }
          alt="s3url"
          width="1200"
          height="1200"
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ScreenshotImage />
        <ol>
          <li>Image above should come from s3 bucket.</li>
        </ol>
      </main>
    </div>
  );
}
