import { useEffect, useState } from "react";
import { useMemo } from "react";
import { getImages } from "./api/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQueryValue, setSearchQueryValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!searchQueryValue) {
      return;
    }
    const fetching = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const responseApi = await getImages(searchQueryValue, page);
        const data = responseApi.results;
        setImages((prevState) => {
          return page === 1 ? data : [...prevState, ...data];
        });
        setTotalPages(responseApi.totalPages);
        setIsLoading(false);

        if (data.length === 0) {
          toast.warning("No results found. Try a different search.");
          return;
        }
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
    fetching();
  }, [searchQueryValue, page]);

  const handleSearch = (searchValue) => {
    setSearchQueryValue(searchValue);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const modalComponent = useMemo(() => {
    if (!modalOpen || !selectedImage) return null;

    return (
      <ImageModal
        isOpen={modalOpen}
        image={selectedImage}
        onClose={handleCloseModal}
      />
    );
  }, [modalOpen, selectedImage]);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} isDisabled={isLoading} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={handleOpenModal} />
      {isLoading && <Loader />}
      {page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      {modalComponent}
    </div>
  );
}

export default App;
