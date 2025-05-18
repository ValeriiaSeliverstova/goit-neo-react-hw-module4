import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

export default function ImageModal({ isOpen, image, onClose }) {
  const [loaded, setLoaded] = useState(false);

  // Reset loading state when image changes
  useEffect(() => {
    if (image) setLoaded(false);
  }, [image]);

  if (!image || !isOpen) return null;

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.ImageModal}
      overlayClassName={css.Overlay}
      shouldFocusAfterRender={false}
    >
      <div className={css.ImageContainer}>
        {!loaded && (
          <div className={css.LoaderWrapper}>
            <Loader />
          </div>
        )}

        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.ModalImage}
          onLoad={handleImageLoad}
          style={{ display: loaded ? "block" : "none" }}
        />

        {loaded && (
          <>
            <button onClick={onClose} className={css.CloseButton}>
              <FaTimes size={24} />
            </button>
            <div className={css.ImageTitle}>
              {image.alt_description || "Untitled"}
            </div>
            <p className={css.Likes}>❤️ {image.likes} likes</p>
          </>
        )}
      </div>
    </Modal>
  );
}
