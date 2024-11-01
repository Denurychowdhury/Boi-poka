import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDb";

const BookDetails = () => {
    const { bookId } = useParams()
    const id = parseInt(bookId)
    // console.log(bookId);
    const data = useLoaderData()
    // console.log(data);
    const book = data.find(book => book.bookId === id)
    // console.log(book, data, bookId);
    const { bookId: currentBookId, name, image, author, category, review, tag, totalPages, publisher, yearOfPublishing, rating } = book;

    // handle add to mark
    const hadleMarkAsRead = (id) => {
        console.log('booked');
        /**
         * 1.understand what to store or save:=>bookId
         * 2.where to store:database
         * 3.array ,list or collection
         * 4.check if the book is already in the readList
         * 5.if not,then add the book to the list
         * 6.if yes,do not add the book
         */
        addToStoredReadList(id)
    }
    return (
        <div>
            <h2>Book details:{currentBookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button onClick={() => hadleMarkAsRead(bookId)} className="btn btn-outline btn-accent">Read</button>
            <button className="btn btn-accent">wish List</button>
        </div>
    );
};

export default BookDetails;