"use client";
type Props = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};
export const Pagination = ({ page, setPage, totalPages }: Props) => {
  const handleCLick = (prev?: boolean) => {
    if (prev) {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };
  return (
    <div className="join border p-1  rounded-lg">
      <button
        disabled={page === 1}
        onClick={() => handleCLick(true)}
        className="join-item btn"
      >
        «
      </button>
      <button className="join-item btn">Page {page}</button>
      <button
        disabled={page === Math.ceil(totalPages)}
        onClick={() => handleCLick()}
        className="join-item btn"
      >
        »
      </button>
    </div>
  );
};
