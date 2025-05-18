import css from "./SearchBar.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";

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
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchButton}>
          <FaSearch />
        </button>
        <input
          className={css.searchInput}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
      </form>
    </header>
  );
}
