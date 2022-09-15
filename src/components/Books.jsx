import React from 'react'
import Book from './Book';

function Books({books, onAdd}) {
 
    
  return (
    <div className='books'>
       {books.map((b)=>
         <Book book = {b} key={b.id} onAdd={onAdd}/>
       )}
    </div>
  )
}

export default Books