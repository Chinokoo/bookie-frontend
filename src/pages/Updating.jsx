import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });

  const bookid = location.pathname.split("/")[2];
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.put("http://localhost:8080/api/books/" + bookid, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(book);
  return (
    <>
      <div className="form">
        <h1>Add A new Book</h1>
        <input
          type="text"
          placeholder="enter the title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="enter the decription"
          name="desc"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="enter the cover"
          name="cover"
          onChange={handleChange}
        />
      </div>
      <button className="add-button" onClick={handleClick}>
        Add Book
      </button>
    </>
  );
};

export default Update;
