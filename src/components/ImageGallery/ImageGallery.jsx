import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <>
      <ul className={css.ImageGallery}>
        {images.map((image) => (
          <li key={image.id} className={css.ImageGalleryItem}>
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description}
              likes={image.likes}
              id={image.id}
              onClick={() => onImageClick(image)}
              style={{ cursor: "pointer" }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
