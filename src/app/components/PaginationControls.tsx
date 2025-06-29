"use client";
import { useRouter, useSearchParams } from "next/navigation";

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
};

const PaginationControls = ({
  currentPage,
  totalPages,
}: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="flex justify-between flex-col sm:flex-row items-center gap-4 my-10">
      <button
        className="text-[#667085] dark:text-white py-2 px-4 rounded-md disabled:cursor-not-allowed cursor-pointer"
        disabled={!hasPrevPage}
        onClick={() => goToPage(currentPage - 1)}>
        Previous
      </button>

      {(() => {
        const pageButtons = [];
        const maxButtons = 5;
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

        // Always show first page
        pageButtons.push(
          <button
            key={1}
            className={`py-2 px-4 rounded-md cursor-pointer ${
              currentPage === 1
                ? "bg-[#F9F5FF] text-[#7F56D9] dark:text-[var(--background)]"
                : "text-[#667085] dark:text-white"
            }`}
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}>
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
          if (i === 1 || i === totalPages) continue;
          pageButtons.push(
            <button
              key={i}
              className={`py-2 px-4 rounded-md cursor-pointer ${
                currentPage === i
                  ? "bg-[#F9F5FF] text-[#7F56D9] dark:text-[var(--background)]"
                  : "text-[#667085] dark:text-white"
              }`}
              onClick={() => goToPage(i)}
              disabled={currentPage === i}>
              {i}
            </button>
          );
        }

        // Dots after
        if (endPage < totalPages - 1) {
          pageButtons.push(
            <span key="end-ellipsis" className="px-2 select-none">
              ...
            </span>
          );
        }

        // Always show last page if more than one page
        if (totalPages > 1) {
          pageButtons.push(
            <button
              key={totalPages}
              className={`py-2 px-4 rounded-md cursor-pointer ${
                currentPage === totalPages
                  ? "bg-[#F9F5FF] text-[#7F56D9] dark:text-[var(--background)]"
                  : "text-[#667085] dark:text-white"
              }`}
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}>
              {totalPages}
            </button>
          );
        }

        return <div className="flex flex-wrap gap-2">{pageButtons}</div>;
      })()}

      <button
        className="text-[#667085] dark:text-white py-2 px-4 rounded-md disabled:cursor-not-allowed cursor-pointer"
        disabled={!hasNextPage}
        onClick={() => goToPage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
