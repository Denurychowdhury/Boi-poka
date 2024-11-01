import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readlist, setReadList] = useState([])
    const [sort, setSort] = useState('')
    const allbooks = useLoaderData()
    console.log(allbooks);
    // ideally we will directly get the read book list from the database

    useEffect(() => {
        const storedReadList = getStoredReadList();
        // this is the worst way
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        console.log(storedReadList, allbooks, storedReadListInt);
        // 
        const readbooklist = allbooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readbooklist);
    }, [])

    const handleSort = sortType => {
        setSort(sortType)
        if (sortType === 'Number of pages') {
            const sortedReadList = [...readlist].sort((a, b) => b.totalPages - a.totalPages)
            setReadList(sortedReadList)
        }
        if (sortType === 'Ratings') {
            const sortedRatinglist = [...readlist].sort((a, b) => a.rating - b.rating)
            setReadList(sortedRatinglist)
        }
        if (sortType === 'year') {
            const sortedYear = [...readlist].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadList(sortedYear)
        }
    }
    console.log(readlist);
    return (
        <div>
            <h3>Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">
                    {
                        sort ? `sort By ${sort}` : 'sort By'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
                    <li onClick={() => handleSort('Number of pages')}><a>Number of pages</a></li>
                    <li onClick={() => handleSort('year')}><a>Publisher year</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readlist.length} </h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                        {
                            readlist.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;