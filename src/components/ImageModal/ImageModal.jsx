import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, image, onClose }) {
  if (!image || !isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.ImageModal}
      overlayClassName={css.Overlay}
    >
      <button onClick={onClose} className={css.CloseButton}>
        ×
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.ModalImage}
      />
    </Modal>
  );
}
