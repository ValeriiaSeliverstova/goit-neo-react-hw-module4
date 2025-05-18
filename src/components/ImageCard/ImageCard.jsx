import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt, likes, id, onClick }) {
  return (
    <div className={css.ImageCard} key={id}>
      <div className={css.ImageWrapper}>
        <img
          src={src}
          alt={alt}
          onClick={onClick}
          style={{ cursor: "zoom-in" }}
        />
        <div className={css.LikesOverlay}>❤️ {likes}</div>
      </div>
    </div>
  );
}
