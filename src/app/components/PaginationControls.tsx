type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

const PaginationControls = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationControlsProps) => {
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const handleNavigation = (direction: "prev" | "next") => {
    const newPage = direction === "prev" ? currentPage - 1 : currentPage + 1;
    setCurrentPage(newPage);
  };

  return (
    <div className="flex justify-between flex-col sm:flex-row items-center gap-4 my-10">
      <button
        className="bg-[var(--foreground)] text-[var(--background)] py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!hasPrevPage}
        onClick={() => handleNavigation("prev")}>
        Previous
      </button>

      {(() => {
        const pageButtons = [];
        const maxButtons = 5; // Adjust for responsiveness if needed
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, currentPage + 1);

        if (totalPages <= maxButtons) {
          startPage = 1;
          endPage = totalPages;
        } else {
          if (currentPage <= 3) {
        startPage = 1;
        endPage = maxButtons - 1;
          } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - (maxButtons - 2);
        endPage = totalPages;
          }
        }

        // First page
        pageButtons.push(
          <button
        key={1}
        className={`py-2 px-4 rounded-md ${
          currentPage === 1
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        onClick={() => setCurrentPage(1)}>
        1
          </button>
        );

        // Dots before
        if (startPage > 2) {
          pageButtons.push(
        <span key="start-ellipsis" className="px-2 select-none">
          ...
        </span>
          );
        }

        // Middle pages
        for (let i = startPage; i <= endPage; i++) {
          if (i !== 1 && i !== totalPages) {
        pageButtons.push(
          <button
            key={i}
            className={`py-2 px-4 rounded-md ${
          currentPage === i
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        );
          }
        }

        // Dots after
        if (endPage < totalPages - 1) {
          pageButtons.push(
        <span key="end-ellipsis" className="px-2 select-none">
          ...
        </span>
          );
        }

        // Last page
        if (totalPages > 1) {
          pageButtons.push(
        <button
          key={totalPages}
          className={`py-2 px-4 rounded-md ${
            currentPage === totalPages
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </button>
          );
        }

        return (
          <div className="flex flex-wrap gap-2">{pageButtons}</div>
        );
      })()}


      <button
        className="bg-[var(--foreground)] text-[var(--background)] py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
        disabled={!hasNextPage}
        onClick={() => handleNavigation("next")}>
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
