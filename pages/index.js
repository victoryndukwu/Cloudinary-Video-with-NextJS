import Head from "next/head";
import styles from "../styles/Home.module.css";
import Axios from "axios";

export default function Home() {


  const uploadVideo = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "flrt04e4")
    Axios.post("https://api.cloudinary.com/v1_1/victoryndukwu/video/upload/", formData)

  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>Next JS video upload to Cloudinary</h3>
      <input
        type="file"
        onChange={(e) => {
          uploadVideo(e.target.files);
        }}
      />

    </div>
  );
}
