import css from "./SearchBar.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim().toLowerCase();
    if (query === "") {
      toast.warning("Please enter a search query");
      return;
    }
    onSubmit(query);
  };

  return (
    <header>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          name="query"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
