import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" className={css.LoadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}
