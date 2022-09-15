import React from 'react';
import {BsBookmarkFill,BsInfoSquareFill} from 'react-icons/bs';

function Book({book, onAdd}) {

//    function onAdd(title){    }

  return (
    <div className='book-card'>
        <img className='book-img' src="https:/picsum.photos/200" alt="book-img" />
        <div className="book-card-body">
            <h3 className="book-card-title">{book.title}</h3>
            <p className="book-desc">{book.description}</p>
        </div>
        <button className="btn" onClick={()=>onAdd(book.title)}><BsBookmarkFill /></button>
        <button className="btn"><BsInfoSquareFill /></button>
    </div>
  )
}

export default Book