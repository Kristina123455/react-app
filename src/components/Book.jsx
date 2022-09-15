import React from "react";
import { BsBookmarkFill, BsInfoSquareFill } from "react-icons/bs";

function Book({ book, onAdd, saved }) {
  //    function onAdd(title){    }

  return (
    <div className={saved===1 ? "book-card" : "card-cart"}>
      <img className={saved===1 ? "card-img-top" : "card-img-left"} src="https:/picsum.photos/200" alt="book-img" />
      <div className="book-card-body">
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-desc">{book.description}</p>
      </div>
      {saved === 1 ? (
        <>
          <button className="btn" onClick={() => onAdd(book.title)}>
            <BsBookmarkFill />
          </button>
          <button className="btn">
            <BsInfoSquareFill />
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Book;
