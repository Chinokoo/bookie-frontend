import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/books");
        console.log(res);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  const handleDelete = async (_id) => {
    try {
      await axios.delete("http://localhost:8080/api/books/" + _id);
      window.location.reload();
    } catch (error) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>Books By Peter Chinoko</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book._id}>
            {book.cover && <img src={book.cover} />}
            <h1 className="book-title">{book.title}</h1>
            <p className="book-desc">{book.desc}</p>
            <button className="update-button">
              <Link to={`/update/${book._id}`}>Update</Link>
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className="add-button">
        <Link to="/add">Add a Book</Link>
      </button>
    </>
  );
};

export default Books;
