import classNames from "classnames";
import { useEffect, useMemo } from "react";

const Paginate = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center py-8">
      {pageNumbers.map((number) => {
        return (
          <a
            key={number}
            href="#"
            onClick={() => paginate(number)}
            className={classNames(
              `h-10 w-10  font-semibold  text-sm flex items-center justify-center
            ${
              number == currentPage
                ? "text-white bg-blue-800 hover:bg-blue-600"
                : "text-gray-800 hover:bg-blue-600"
            }
            `
            )}
          >
            {number}
          </a>
        );
      })}
    </div>
  );
};
export default Paginate;
