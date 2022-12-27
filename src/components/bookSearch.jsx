import { useEffect } from "react";
import { useState } from "react";
import BookDispaly from "./bookDispaly";
//import SearchBar from "./searchBar";

function BookSearch() {
    const [bookTitle, setBookTitle] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`).then(
                (data) => {
                    data.json().then(info => {
                        setBooks(info.items);
                    })
                }).catch((e) => {
                    console.log(e);
                })
        }
        fetchData();
    }, [bookTitle]);

    const handleSearch = () => {
        if (bookTitle === undefined) {
            alert("Please Enter Book Title");
        }
    };

    return (
        <>
            <div>
                <div className="heading">
                    <h1>BOOK SEARCH</h1>
                </div>
                <div className="display-books">
                    <input type={"text"} onChange={(e) => { setBookTitle(e.target.value) }} className="search" />
                    <button onClick={handleSearch} className="btn">SEARCH</button>
                    <div className="image-section">
                        {(books !== undefined && books.length !== 0) && books.map((book, index) => {
                            return (
                                <BookDispaly book={book} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookSearch;