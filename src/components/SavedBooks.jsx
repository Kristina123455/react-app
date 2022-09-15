import Book from './Book'

const SavedBooks = ({books}) => {
  return (
    <div className='cart-container'>
        <h3>Saved books</h3>
        {books.map((b)=> (
         <Book book = {b} key={b.id} saved={0}/>
       ))}
    </div>
  )
}

export default SavedBooks