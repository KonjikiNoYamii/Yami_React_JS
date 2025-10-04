import styles from "./GalleryWaifu.module.css";

function GalleryWaifu({ foto, nama }) {
  return (
    <div className={styles.mainContainer}>
      <img src={foto} alt={nama} className={styles.waifu} />
      <p>{nama}</p>
    </div>
  );
}
export default GalleryWaifu;
