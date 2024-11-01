import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    // console.log(book);
    const { bookId, image, bookName, author, rating, category, tags, totalPages } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-3 border-2 border-gray-200">
                <figure className="bg-base-200 py-8 rounded-lg">
                    <img className="h-36 w-[136px]"
                        src={image}
                        alt="books" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-3">
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn py-3 bg-[#f4fcf3] rounded-2xl text-base font-bold text-[#23BE0A]">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p className="">By: {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>{totalPages}</div>
                        <div className="badge badge-outline flex gap-2">{rating}<FaRegStar /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;