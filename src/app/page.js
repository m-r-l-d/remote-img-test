import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const getImage = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/images');
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      const data = await response.text()
      return data
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }
  
  async function ScreenshotImage() {
   const imageUrl = await getImage()
   
    return (
      <div>
        {imageUrl ? (
          <Image src={imageUrl} alt="s3url" width='1200' height='1200'/>
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    );
  };


  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <ScreenshotImage />
        <ol>
          <li>
            Image above should come from s3 bucket.
          </li>
        </ol>
        </main>
    </div>
  );
}
