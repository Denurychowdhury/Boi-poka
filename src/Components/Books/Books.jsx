import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(books => setBooks(books))
    }, [])
    console.log(books);
    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-center">
                Books
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;

/**
 * 1.state to store book
 * 2.fetch the load data
 * 3.fetch to load data 
 * 4.set the data to the state
 */