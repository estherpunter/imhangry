import { useState } from "react";

function usePages(itemsPerPage, initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    console.log("Next page clicked. Current page:", currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getVisibleItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const getTotalPages = (totalItems) => Math.ceil(totalItems / itemsPerPage);

  return {
    currentPage,
    handleNextPage,
    handlePrevPage,
    getVisibleItems,
    getTotalPages,
  };
}

export default usePages;
