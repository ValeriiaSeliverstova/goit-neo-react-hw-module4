import css from "./ErrorMessage.module.css";
import errorImage from "../../img/error.jpg";

export default function ErrorMessage() {
  return (
    <div className={css.errorContainer}>
      <h1 className={css.errorTitle}>Something went wrong</h1>
      <p className={css.errorMessage}>
        Please try again later or contact support.
      </p>
      <img src={errorImage} alt="Error" className={css.errorImage} />
    </div>
  );
}
