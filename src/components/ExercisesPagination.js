import React, { useState, useEffect } from "react";

const ExercisesPagination = ({ setPage, page, exerciseCount }) => {
  const [activePage, setActivePage] = useState(page);
  console.log("PAGINATION PAGE");

  let perPage = 10;
  let remainder = exerciseCount;
  let pageLoop = 1;
  let pagesNumArray = [];

  const handlePageNumClick = (e) => {
    console.log("page num", e.target.id);
    setPage(e.target.id);
  };

  //   console.log("PAGE LOOP", pageLoop);
  //   console.log("PAGE NUMEBR", page);

  while (remainder > 0) {
    remainder -= perPage;

    if (pageLoop === page) {
      console.log("in here!!");

      pagesNumArray.push(
        <p
          style={{ backgroundColor: "gray" }}
          id={pageLoop}
          key={pageLoop}
          //  onClick={(e) => handlePageNumClick(e)}
          className="pagenum"
        >
          {pageLoop}
        </p>
      );
    } else {
      pagesNumArray.push(
        <p
          className="pagenum"
          //  onClick={(e) => handlePageNumClick(e)}
          key={pageLoop}
          id={pageLoop}
        >
          {pageLoop}
        </p>
      );
    }
    pageLoop++;
  }
  //   setPages(pagesNumArray);
  console.log(pagesNumArray);

  return (
    <div className="pagination-container">
      {page !== 1 && (
        <button
          className="page-btn"
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          Back
        </button>
      )}

      {pagesNumArray}
      {page !== pagesNumArray.length && (
        <button
          className="page-btn"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default ExercisesPagination;
