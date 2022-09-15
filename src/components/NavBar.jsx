import React from 'react';
import {ImBooks} from 'react-icons/im';
import {Link} from 'react-router-dom';

function NavBar({booksText}) {
    
    return (
        <div className='navBar'>
            <Link to="/">Books</Link>
            <Link to="/savedBooks" className="cart-items">
                <ImBooks/>Saved books
                <p className="navBar-books-text">{booksText}</p>
            </Link>

        </div>

    )

}

export default NavBar